import NavigationComponent from "./NavigationComponent";
import SearchIcon from "../assets/SearchIcon.svg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import TeamBanner from "../assets/TeamMemberPics/TeamBanner.gif"
import { CustomStyle, PublicationsStyles as styles } from "../UIComponentCSS/PublicationsCss";
interface Publication {
  id: number;
  sourceTitle: string;
  citeScore: number;
  percentile: number;
  citations: number;
  documents: number;
}

interface Filters {
  openAccess: boolean;
  timeframe: boolean;
  minCitations: string;
  minDocuments: string;
  highestPercentile: boolean;
  noMinimum: boolean;
  quartile1: boolean;
  quartile2: boolean;
  quartile3: boolean;
  quartile4: boolean;
}

const Publications: React.FC = () => {
  const [filters, setFilters] = React.useState<Filters>({
    openAccess: false,
    timeframe: false,
    minCitations: "",
    minDocuments: "",
    highestPercentile: false,
    noMinimum: false,
    quartile1: false,
    quartile2: false,
    quartile3: false,
    quartile4: false,
  });

  const TABLE_COLUMNS: {
    key: keyof Publication;
    label: string;
    render?: (value: any) => string;
  }[] = [
    { key: "sourceTitle", label: "Source title" },
    { key: "citeScore", label: "CiteScore" },
    { key: "percentile", label: "Highest Percentile", render: (value) => `${value}% OncologyQ2` },
    { key: "citations", label: "Citations 2024-25" },
    { key: "documents", label: "Documents 2024-25" },
    { key: "documents", label: "Cited" },
  ];

  const INITIAL_DATA: Publication[] = Array(20)
    .fill(null)
    .map((_, index) => ({
      id: index,
      sourceTitle: index % 2 === 0 ? `Looking For New Competitions` : `Short Title Example`,
      citeScore: 873.2,
      percentile: 99,
      citations: 555106,
      documents: 106,
    }));

  // Responsive breakpoints
  const [isXS, setIsXS] = useState(false); // ≤480px
  const [isSM, setIsSM] = useState(false); // ≤768px
  const [isMD, setIsMD] = useState(false); // ≤1024px
  const [isLG, setIsLG] = useState(false); // ≤1440px

  useEffect(() => {
    const updateScreenSize = () => {
      setIsXS(window.innerWidth <= 480);
      setIsSM(window.innerWidth <= 768);
      setIsMD(window.innerWidth <= 1024);
      setIsLG(window.innerWidth <= 1440);
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [tableData, setTableData] = React.useState<Publication[]>(INITIAL_DATA);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = React.useState<number>(10);
  const [selectedRows, setSelectedRows] = React.useState<Set<number>>(new Set());
  const [pendingFilters, setPendingFilters] = React.useState<Filters>(filters);
  const [isFilterOpen, setIsFilterOpen] = React.useState<boolean>(false);

  const applyFilters = () => {
    let filteredData = [...INITIAL_DATA];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredData = filteredData.filter((row) =>
        Object.values(row).some((value) => String(value).toLowerCase().includes(query))
      );
    }

    if (pendingFilters.minCitations !== "" && !pendingFilters.noMinimum) {
      const minCitations = parseInt(pendingFilters.minCitations) || 0;
      filteredData = filteredData.filter((row) => row.citations >= minCitations);
    }

    if (pendingFilters.minDocuments !== "" && !pendingFilters.noMinimum) {
      const minDocuments = parseInt(pendingFilters.minDocuments) || 0;
      filteredData = filteredData.filter((row) => row.documents >= minDocuments);
    }

    if (pendingFilters.highestPercentile) {
      filteredData = filteredData.filter((row) => row.percentile >= 90);
    } else if (
      pendingFilters.quartile1 ||
      pendingFilters.quartile2 ||
      pendingFilters.quartile3 ||
      pendingFilters.quartile4
    ) {
      const selectedQuartiles: number[] = [];
      if (pendingFilters.quartile1) selectedQuartiles.push(1);
      if (pendingFilters.quartile2) selectedQuartiles.push(2);
      if (pendingFilters.quartile3) selectedQuartiles.push(3);
      if (pendingFilters.quartile4) selectedQuartiles.push(4);

      filteredData = filteredData.filter((row) => {
        const quartile = Math.ceil(row.percentile / 25);
        return selectedQuartiles.includes(quartile);
      });
    }

    setFilters(pendingFilters);
    setTableData(filteredData);
    setCurrentPage(1);
    setSelectedRows(new Set());
    setIsFilterOpen(false);
  };

  const clearFilters = () => {
    const resetFilters: Filters = {
      openAccess: false,
      timeframe: false,
      minCitations: "",
      minDocuments: "",
      highestPercentile: false,
      noMinimum: false,
      quartile1: false,
      quartile2: false,
      quartile3: false,
      quartile4: false,
    };
    setPendingFilters(resetFilters);
    setFilters(resetFilters);
    setSearchQuery("");
    setTableData(INITIAL_DATA);
    setCurrentPage(1);
    setSelectedRows(new Set());
    setIsFilterOpen(false);
  };

  const handleFilterChange = (filterName: keyof Filters, value: boolean | string) => {
    setPendingFilters((prev) => ({
      ...prev,
      [filterName]: value,
      ...(filterName === "noMinimum" && value ? { minCitations: "", minDocuments: "" } : {}),
      ...(filterName === "highestPercentile" && value
        ? { quartile1: false, quartile2: false, quartile3: false, quartile4: false }
        : {}),
      ...((filterName === "quartile1" ||
          filterName === "quartile2" ||
          filterName === "quartile3" ||
          filterName === "quartile4") &&
        value
        ? { highestPercentile: false }
        : {}),
    }));
  };

  const paginatedData = tableData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(tableData.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      setSelectedRows(new Set());
    }
  };

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
    setSelectedRows(new Set());
  };

  const handleRowSelect = (id: number) => {
    const newSelectedRows = new Set(selectedRows);
    if (newSelectedRows.has(id)) {
      newSelectedRows.delete(id);
    } else {
      newSelectedRows.add(id);
    }
    setSelectedRows(newSelectedRows);
  };

  const handleSelectAll = () => {
    if (selectedRows.size === paginatedData.length) {
      setSelectedRows(new Set());
    } else {
      const newSelectedRows = new Set(paginatedData.map((row) => row.id));
      setSelectedRows(newSelectedRows);
    }
  };

  return (
    <div className={styles.container}>
      <NavigationComponent />
      <div className={`${styles.containerMain} ${isSM ? styles.containerMainisSM : styles.containerMainNotisSM} `}>
        {/* Filter Panel */}
        <div
          className={`${
            isXS ? styles.filterPannelContainerIsXS : isSM ? styles.filterPannelContainerIsSM : isMD ? styles.filterPannelContainerIsMD : styles.filterPannelDefaultWidth} ${styles.filterPannelContainer}`}
        >
          <div className={styles.filterMain}>
            <div className={styles.filterListTxt}>Filter refine list</div>
            <button
              className={`${
                isSM ? styles.filterButtonIsSM : styles.filterButtonNotIsSM} ${styles.filterButton}`}
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              {isFilterOpen ? "Hide Filters" : "Show Filters"}
            </button>
            <div className={`${styles.filterActionMain} ${isSM ? styles.filterActionIsSM : styles.filterActionNotIsSM}`}>
              <div
                onClick={applyFilters}
                className={styles.applyfilter}
              >
                Apply
              </div>
              <span>/</span>
              <div
                onClick={clearFilters}
                className={styles.clearFilter}
              >
                Clear filters
              </div>
            </div>
          </div>
          <div
            className={`${
              isFilterOpen || !isSM ? styles.isFilterOpenNotIsSM : styles.isNotFilterOpenNotIsSM
            } ${styles.filterBox}`}
          >
            <div>
              <label className={styles.filtersLabel}>
                <input
                  type="checkbox"
                  checked={pendingFilters.openAccess}
                  onChange={() => handleFilterChange("openAccess", !pendingFilters.openAccess)}
                  className={styles.filtersInput}
                />
                <span className={styles.filtersText}>Display only Open Access journals</span>
              </label>
            </div>
            <div>
              <label className={styles.filtersLabel}>
                <input
                  type="checkbox"
                  checked={pendingFilters.timeframe}
                  onChange={() => handleFilterChange("timeframe", !pendingFilters.timeframe)}
                  className={styles.filtersInput}
                />
                <span className={styles.filtersText}>Counts for 4-year timeframe</span>
              </label>
            </div>
            <div>
              <label className={styles.filtersLabel}>
                <input
                  type="checkbox"
                  checked={pendingFilters.noMinimum}
                  onChange={() => handleFilterChange("noMinimum", !pendingFilters.noMinimum)}
                  className={styles.filtersInput}
                />
                <span className={styles.filtersText}>No minimum selected</span>
              </label>
            </div>
            {!pendingFilters.noMinimum && (
              <>
                <div>
                  <label className={styles.filtersLabel}>
                    <input
                      type="checkbox"
                      checked={pendingFilters.minCitations !== ""}
                      onChange={() =>
                        handleFilterChange("minCitations", pendingFilters.minCitations ? "" : "0")
                      }
                      className={styles.filtersInput}
                    />
                    <span className={styles.filtersText}>Enter number for minimum citations</span>
                  </label>
                  {pendingFilters.minCitations !== "" && (
                    <input
                      type="number"
                      value={pendingFilters.minCitations}
                      onChange={(e) => handleFilterChange("minCitations", e.target.value)}
                      className={styles.minCitationsInput}
                    />
                  )}
                </div>
                <div>
                  <label className={styles.filtersLabel}>
                    <input
                      type="checkbox"
                      checked={pendingFilters.minDocuments !== ""}
                      onChange={() =>
                        handleFilterChange("minDocuments", pendingFilters.minDocuments ? "" : "0")
                      }
                      className={styles.filtersInput}
                    />
                    <span className={styles.filtersText}>Enter number for minimum documents</span>
                  </label>
                  {pendingFilters.minDocuments !== "" && (
                    <input
                      type="number"
                      value={pendingFilters.minDocuments}
                      onChange={(e) => handleFilterChange("minDocuments", e.target.value)}
                      className={styles.minDocumentsInput}
                    />
                  )}
                </div>
              </>
            )}
            <div>
              <label className={styles.filtersLabel}>
                <input
                  type="checkbox"
                  checked={pendingFilters.highestPercentile}
                  onChange={() => handleFilterChange("highestPercentile", !pendingFilters.highestPercentile)}
                  className={styles.filtersInput}
                />
                <span className={styles.filtersText}>Show titles in top 10 percent</span>
              </label>
              {!pendingFilters.highestPercentile && (
                <div className="mt-7 space-y-7">
                  <label className={styles.filtersLabel}>
                    <input
                      type="checkbox"
                      checked={pendingFilters.quartile1}
                      onChange={() => handleFilterChange("quartile1", !pendingFilters.quartile1)}
                      className={styles.filtersInput}
                    />
                    <span className={styles.filtersText}>1st quartile</span>
                  </label>
                  <label className={styles.filtersLabel}>
                    <input
                      type="checkbox"
                      checked={pendingFilters.quartile2}
                      onChange={() => handleFilterChange("quartile2", !pendingFilters.quartile2)}
                      className={styles.filtersInput}
                    />
                    <span className={styles.filtersText}>2nd quartile</span>
                  </label>
                  <label className={styles.filtersLabel}>
                    <input
                      type="checkbox"
                      checked={pendingFilters.quartile3}
                      onChange={() => handleFilterChange("quartile3", !pendingFilters.quartile3)}
                      className={styles.filtersInput}
                    />
                    <span className={styles.filtersText}>3rd quartile</span>
                  </label>
                  <label className={styles.filtersLabel}>
                    <input
                      type="checkbox"
                      checked={pendingFilters.quartile4}
                      onChange={() => handleFilterChange("quartile4", !pendingFilters.quartile4)}
                      className={styles.filtersInput}
                    />
                    <span className={styles.filtersText}>4th quartile</span>
                  </label>
                </div>
              )}
            </div>
            <div className={` ${styles.applyButton} ${isSM ? styles.applyButtonIsSM : styles.applyButtonNotIsSM}`}>
              <div
                onClick={applyFilters}
                className={styles.applyButtonMain}
              >
                Apply
              </div>
              <span>/</span>
              <div
                onClick={clearFilters}
                className={styles.clearFilter2}
              >
                Clear filters
              </div>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div
          className={`${styles.tableContainer} ${isSM ? styles.tableContainerIsSM : styles.tableContainerIsNotSM} ${
            isXS ? styles.tableContainerIsXS : isSM ? styles.tableContainerIsXsElse : styles.tableContainerElse
          }`}
        >
          <div className={styles.searchContainer}>
            <div className={`${isXS ? styles.searchMainIsXS : isSM ? styles.searchMainIsSM : styles.searchMainElse}`}>
              <label htmlFor="search" className={styles.searchLabel}>
                Search
              </label>
              <div className={styles.searchInputContainer}>
                <div className={styles.searchIcon}>
                  <img
                    src={SearchIcon}
                    alt="Search"
                    className={`${isXS ? styles.searchIconisXS : styles.searchIconisNotXS}`}
                  />
                </div>
                <input
                  type="search"
                  id="search"
                  placeholder="Search"
                  required
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`${styles.searchInput} ${
                      isXS ? styles.searchInputisXS : ""
                    }`}
                />
              </div>
            </div>
          </div>

          {/* Custom Div-based Table */}
          <div className={styles.customTableContainer}>
            <div className={styles.customTableMain}>
              <CustomStyle/>
              {/* Header Row */}
              <div className={styles.headersContainer}>
                <div className={styles.selectAllMain}>
                  {/* select all inputs */}
                  {/* <input
                    type="checkbox"
                    checked={selectedRows.size === paginatedData.length && paginatedData.length > 0}
                    onChange={handleSelectAll}
                    className={`rounded text-blue-500 focus:ring-blue-500 ${isXS ? "w-5 h-5" : "w-6 h-6"}`}
                  /> */}
                </div>
                {TABLE_COLUMNS.map((column) => (
                  <div
                    key={column.key}
                    className={`${styles.tableColumnMain} ${
                      column.key === "sourceTitle"
                        ? `${isXS ? styles.tableColumnMainisXS : isSM ? styles.tableColumnMainisSM : styles.tableColumnMainElse} `
                        : styles.tableColumnMainElse2
                    }`}
                  >
                    {column.label}
                  </div>
                ))}
              </div>

              {/* Data Rows */}
              {paginatedData.length > 0 ? (
                paginatedData.map((row) => (
                  <div key={row.id} className={styles.dataRowContainer}>
                    <div className={styles.dataRowCheckBox}>
                      <input
                        type="checkbox"
                        checked={selectedRows.has(row.id)}
                        onChange={() => handleRowSelect(row.id)}
                        className={`${styles.checkBoxInput} ${isXS ? styles.checkBoxInputIsXS : styles.checkBoxInputIsNotXS}`}
                      />
                    </div>
                    <div className={styles.tableColumn}>
                      {TABLE_COLUMNS.map((column) => {
                        const value = column.render
                          ? column.render(row[column.key])
                          : row[column.key];
                        const isLongWord = String(value).length > 30 && !String(value).includes(" ");
                        return (
                          <div
                            key={column.key}
                            className={`${styles.tableDataValue} ${isLongWord ? styles.tableDataValueIsLong : ""} ${
                              column.key === "sourceTitle"
                                ? `${isXS ? styles.tableDataValueIsXS : isSM ? styles.tableDataValueIsSM : styles.tableDataValueElse} ${styles.tableDataValueIf}`
                                : styles.tableDataElse
                            }`}
                            style={{ fontWeight: 300, fontSize: isXS ? "14px" : "18px", lineHeight: "100%", letterSpacing: "-3.1%" }}
                          >
                            {value}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))
              ) : (
                <div className={styles.custom_row_content}>
                  <div className={styles.dataRowCheckBox}></div>
                  <div className="custom-content-wrapper">
                    <div
                      className={styles.noDataContainer}
                      style={{ fontWeight: 300, fontSize: isXS ? "14px" : "18px", lineHeight: "100%", letterSpacing: "-3.1%" }}
                    >
                      No data available
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Pagination Section */}
          <div className={styles.paginationContainer}>
            <div className={styles.filtersLabel}>
              <span className={`${styles.pageRow} ${isXS ? styles.pageRowisXS: ""}`}>
                Rows per page:
              </span>
              <select
                value={itemsPerPage}
                onChange={handleItemsPerPageChange}
                className={`${styles.pageValues} ${
                  isXS ? styles.pageValueisXS : ""
                }`}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
              </select>
            </div>
            <div className="flex items-center space-x-4">
              <div
                onClick={() => handlePageChange(currentPage - 1)}
                className={`${styles.paging} ${currentPage === 1 ? "disabled" : ""}`}
              >
                <IoIosArrowBack className={` ${styles.backArrow} ${isXS ? styles.backArrowisXS : ""}`} />
              </div>
              <span className={` ${styles.paginationMain} ${isXS ? styles.paginationMainisXS : ""}`}>
                Page {currentPage} of {totalPages}
              </span>
              <div
                onClick={() => handlePageChange(currentPage + 1)}
                className={`${styles.pageChange} ${currentPage === totalPages ?  styles.pageEqual : ""}`}
              >
                <IoIosArrowForward className={` ${styles.forwardArrow} ${isXS ? styles.forwardArrowisXS : ""}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className={styles.bottomContainer}>
      <div
        style={{ backgroundImage: `url(${TeamBanner})` }}
        className={styles.teamBanner}
      >
        <div className={styles.wantToText}>
        Want to create FUTURE ?
        </div>
        <div className={styles.exploreNewPossibilitiesText}>
        Explore new possibilities with us everyday. Create your mark on future with us.
        </div>
        <div className={styles.joinUsText}>
        Join Us
        </div>
      </div>
      {/* Footer */}
      <div className={styles.border}>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
      </div>
    </div>
  );
};

export default Publications;