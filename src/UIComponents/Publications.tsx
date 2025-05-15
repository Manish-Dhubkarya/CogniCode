import NavigationComponent from "./NavigationComponent";
import SearchIcon from "../assets/SearchIcon.svg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import TeamBanner from "../assets/TeamMemberPics/TeamBanner.gif"

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
    <div className="flex flex-col min-h-screen mb-10 font-sans libre-franklin">
      <NavigationComponent />
      <div className={`flex bg-gray-100 flex-col ${isSM ? "w-full" : "md:flex-row w-[100%] pr-20 mx-auto"} px-5`}>
        {/* Filter Panel */}
        <div
          className={`${
            isXS ? "w-full" : isSM ? "w-[90%]" : isMD ? "w-[280px]" : "w-[320px]"
          } flex shrink-0 flex-col h-fit pt-25`}
        >
          <div className="flex text-[16px] font-semibold justify-between flex-col text-black items-start mb-4">
            <div className="tracking-tight">Filter refine list</div>
            <button
              className={`${
                isSM ? "block" : "hidden"
              } mt-2 px-5 py-2 rounded-[10px] border-[1px] border-purple-500 hover:border-[#8AFF84] hover:text-blue-500`}
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              {isFilterOpen ? "Hide Filters" : "Show Filters"}
            </button>
            <div className={`space-x-4 items-center mt-2 ${isSM ? "hidden" : "flex"}`}>
              <div
                onClick={applyFilters}
                className="px-5 py-2 rounded-[10px] cursor-pointer hover:border-[1px] hover:border-[#8AFF84] border-[1px] border-purple-500 hover:text-blue-500"
              >
                Apply
              </div>
              <span>/</span>
              <div
                onClick={clearFilters}
                className="px-5 py-2 rounded-[10px] cursor-pointer hover:border-[1px] hover:border-[#8AFF84] border-[1px] border-purple-500 hover:text-blue-500"
              >
                Clear filters
              </div>
            </div>
          </div>
          <div
            className={`${
              isFilterOpen || !isSM ? "block" : "hidden"
            } space-y-7 bg-custom-gradient p-5 rounded-[10px]`}
          >
            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={pendingFilters.openAccess}
                  onChange={() => handleFilterChange("openAccess", !pendingFilters.openAccess)}
                  className="rounded-full text-blue-500 focus:ring-blue-500 w-4 h-4"
                />
                <span className="text-[12px]">Display only Open Access journals</span>
              </label>
            </div>
            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={pendingFilters.timeframe}
                  onChange={() => handleFilterChange("timeframe", !pendingFilters.timeframe)}
                  className="rounded-full text-blue-500 focus:ring-blue-500 w-4 h-4"
                />
                <span className="text-[12px]">Counts for 4-year timeframe</span>
              </label>
            </div>
            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={pendingFilters.noMinimum}
                  onChange={() => handleFilterChange("noMinimum", !pendingFilters.noMinimum)}
                  className="rounded-full text-blue-500 focus:ring-blue-500 w-4 h-4"
                />
                <span className="text-[12px]">No minimum selected</span>
              </label>
            </div>
            {!pendingFilters.noMinimum && (
              <>
                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={pendingFilters.minCitations !== ""}
                      onChange={() =>
                        handleFilterChange("minCitations", pendingFilters.minCitations ? "" : "0")
                      }
                      className="rounded-full text-blue-500 focus:ring-blue-500 w-4 h-4"
                    />
                    <span className="text-[12px]">Enter number for minimum citations</span>
                  </label>
                  {pendingFilters.minCitations !== "" && (
                    <input
                      type="number"
                      value={pendingFilters.minCitations}
                      onChange={(e) => handleFilterChange("minCitations", e.target.value)}
                      className="mt-1 w-full p-1 text-black rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 text-[12px]"
                    />
                  )}
                </div>
                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={pendingFilters.minDocuments !== ""}
                      onChange={() =>
                        handleFilterChange("minDocuments", pendingFilters.minDocuments ? "" : "0")
                      }
                      className="rounded-full text-blue-500 focus:ring-blue-500 w-4 h-4"
                    />
                    <span className="text-[12px]">Enter number for minimum documents</span>
                  </label>
                  {pendingFilters.minDocuments !== "" && (
                    <input
                      type="number"
                      value={pendingFilters.minDocuments}
                      onChange={(e) => handleFilterChange("minDocuments", e.target.value)}
                      className="mt-1 w-full p-1 text-black rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 text-[12px]"
                    />
                  )}
                </div>
              </>
            )}
            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={pendingFilters.highestPercentile}
                  onChange={() => handleFilterChange("highestPercentile", !pendingFilters.highestPercentile)}
                  className="rounded-full text-blue-500 focus:ring-blue-500 w-4 h-4"
                />
                <span className="text-[12px]">Show titles in top 10 percent</span>
              </label>
              {!pendingFilters.highestPercentile && (
                <div className="mt-7 space-y-7">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={pendingFilters.quartile1}
                      onChange={() => handleFilterChange("quartile1", !pendingFilters.quartile1)}
                      className="rounded-full text-blue-500 focus:ring-blue-500 w-4 h-4"
                    />
                    <span className="text-[12px]">1st quartile</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={pendingFilters.quartile2}
                      onChange={() => handleFilterChange("quartile2", !pendingFilters.quartile2)}
                      className="rounded-full text-blue-500 focus:ring-blue-500 w-4 h-4"
                    />
                    <span className="text-[12px]">2nd quartile</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={pendingFilters.quartile3}
                      onChange={() => handleFilterChange("quartile3", !pendingFilters.quartile3)}
                      className="rounded-full text-blue-500 focus:ring-blue-500 w-4 h-4"
                    />
                    <span className="text-[12px]">3rd quartile</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={pendingFilters.quartile4}
                      onChange={() => handleFilterChange("quartile4", !pendingFilters.quartile4)}
                      className="rounded-full text-blue-500 focus:ring-blue-500 w-4 h-4"
                    />
                    <span className="text-[12px]">4th quartile</span>
                  </label>
                </div>
              )}
            </div>
            <div className={`flex space-x-4 items-center mt-4 ${isSM ? "block" : "hidden"}`}>
              <div
                onClick={applyFilters}
                className="px-5 py-2 rounded-[10px] cursor-pointer hover:border-[1px] hover:border-[#8AFF84] border-[1px] border-purple-500 hover:text-blue-500"
              >
                Apply
              </div>
              <span>/</span>
              <div
                onClick={clearFilters}
                className="px-5 py-2 rounded-[10px] cursor-pointer hover:border-[1px] hover:border-[#8AFF84] border-[1px] border-purple-500 hover:text-blue-500"
              >
                Clear filters
              </div>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div
          className={`flex-1 p-9 ${isSM ? "pt-5" : "md:pt-25"} ${
            isXS ? "min-w-[300px]" : isSM ? "min-w-[500px]" : "min-w-[800px]"
          }`}
        >
          <div className="flex justify-center mb-3">
            <div className={`${isXS ? "w-full" : isSM ? "w-[80%]" : "w-[50%]"}`}>
              <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 end-2 flex items-center ps-3 pointer-events-none">
                  <img
                    src={SearchIcon}
                    alt="Search"
                    className={`${isXS ? "w-4 h-4" : "w-5 h-5"}`}
                  />
                </div>
                <input
                  type="search"
                  id="search"
                  placeholder="Search"
                  required
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`block w-full p-2 ps-5 pe-10 text-sm text-gray-900 border border-[#1B7BFF] rounded-[5px] bg-gray-50 
                    focus:outline-none focus:ring-blue-500 focus:border-blue-500 
                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                    dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                      isXS ? "text-xs" : ""
                    }`}
                />
              </div>
            </div>
          </div>

          {/* Custom Div-based Table */}
          <div className="w-full overflow-x-auto">
            <div className="table-container">
              <style>
                {`
                  .custom-row {
                    display: flex;
                    align-items: flex-start;
                    min-height: 48px;
                  }
                  .custom-row-content {
                    display: flex;
                    align-items: flex-start;
                    min-height: 48px;
                  }
                  .custom-content-wrapper {
                    display: flex;
                    flex: 1;
                    border-bottom: 1px solid #1B7BFF;
                    margin-left: 0;
                    padding-left: 0;
                  }
                  .custom-content-wrapper > div {
                    display: flex;
                    align-items: flex-start;
                    padding: 12px 16px;
                    margin-top: 24px;
                    white-space: normal;
                  }
                  .custom-content-wrapper > div.long-word {
                    word-break: break-all;
                  }
                  .custom-content-wrapper > div.source-title {
                    padding-left: 0;
                    text-align: left;
                    justify-content: flex-start;
                  }
                  .custom-content-wrapper > div:not(.source-title) {
                    justify-content: center;
                    text-align: center;
                  }
                  .custom-checkbox {
                    width: 40px;
                    padding: 7px 10px 7px 9px;
                    display: flex;
                    align-items: flex-start;
                  }
                  .custom-header {
                    background-color: #f5f5f5;
                    min-height: 48px;
                  }
                  .custom-header > div {
                    display: flex;
                    align-items: center;
                    padding: 12px 16px;
                    white-space: normal;
                  }
                  .custom-header > div.source-title {
                    padding-left: 0;
                    text-align: left;
                    justify-content: flex-start;
                  }
                  .custom-header > div:not(.source-title) {
                    justify-content: center;
                    text-align: center;
                  }
                  .pagination-button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    border: 1px solid #e5e7eb;
                    border-radius: 50%;
                    transition: border-color 0.3s, color 0.3s, background-color 0.3s;
                    cursor: pointer;
                    touch-action: manipulation;
                  }
                  .pagination-button:hover:not(.disabled) {
                    border-color: #a855f7;
                    color: #3b82f6;
                    background-color: #f3f4f6;
                  }
                  .pagination-button.disabled {
                    color: #f87171;
                    cursor: not-allowed;
                  }
                  .pagination-button > * {
                    pointer-events: none;
                  }

                  /* Responsive Styles */
                  @media (max-width: 1440px) {
                    .custom-content-wrapper > div {
                      padding: 10px 14px;
                      font-size: 16px;
                    }
                    .custom-header > div {
                      padding: 10px 14px;
                      font-size: 15px;
                    }
                    .custom-checkbox {
                      width: 38px;
                      padding: 7px 9px;
                    }
                    .pagination-button {
                      width: 38px;
                      height: 38px;
                    }
                  }

                  @media (max-width: 1024px) {
                    .custom-content-wrapper > div {
                      padding: 8px 12px;
                      font-size: 15px;
                    }
                    .custom-header > div {
                      padding: 8px 12px;
                      font-size: 14px;
                    }
                    .custom-checkbox {
                      width: 36px;
                      padding: 7px 8px;
                    }
                    .pagination-button {
                      width: 36px;
                      height: 36px;
                    }
                    .pagination-button svg {
                      width: 18px;
                      height: 18px;
                    }
                  }

                  @media (max-width: 768px) {
                    .custom-content-wrapper > div {
                      padding: 6px 10px;
                      font-size: 14px;
                    }
                    .custom-header > div {
                      padding: 6px 10px;
                      font-size: 13px;
                    }
                    .custom-checkbox {
                      width: 34px;
                      padding: 7px 7px;
                    }
                    .pagination-button {
                      width: 34px;
                      height: 34px;
                    }
                    .pagination-button svg {
                      width: 16px;
                      height: 16px;
                    }
                  }

                  @media (max-width: 480px) {
                    .custom-content-wrapper > div {
                      padding: 5px 8px;
                      font-size: 12px;
                    }
                    .custom-header > div {
                      padding: 5px 8px;
                      font-size: 12px;
                    }
                    .custom-checkbox {
                      width: 32px;
                      padding: 7px 6px;
                    }
                    .custom-content-wrapper > div.source-title {
                      width: 200px;
                    }
                    .pagination-button {
                      width: 32px;
                      height: 32px;
                    }
                    .pagination-button svg {
                      width: 14px;
                      height: 14px;
                    }
                    .table-container {
                      min-width: 300px;
                    }
                  }
                `}
              </style>
              {/* Header Row */}
              <div className="custom-row custom-header">
                <div className="custom-checkbox">
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
                    className={`text-[16px] font-semibold text-[#1B7BFF] libre-franklin ${
                      column.key === "sourceTitle"
                        ? `${isXS ? "w-[200px]" : isSM ? "w-[250px]" : "w-[300px]"} source-title`
                        : "flex-1"
                    }`}
                  >
                    {column.label}
                  </div>
                ))}
              </div>

              {/* Data Rows */}
              {paginatedData.length > 0 ? (
                paginatedData.map((row) => (
                  <div key={row.id} className="custom-row-content text-black">
                    <div className="custom-checkbox">
                      <input
                        type="checkbox"
                        checked={selectedRows.has(row.id)}
                        onChange={() => handleRowSelect(row.id)}
                        className={`rounded text-blue-500 focus:ring-blue-500 mt-7 ${isXS ? "w-5 h-5" : "w-6 h-6"}`}
                      />
                    </div>
                    <div className="custom-content-wrapper">
                      {TABLE_COLUMNS.map((column) => {
                        const value = column.render
                          ? column.render(row[column.key])
                          : row[column.key];
                        const isLongWord = String(value).length > 30 && !String(value).includes(" ");
                        return (
                          <div
                            key={column.key}
                            className={`dm-sans-regular ${isLongWord ? "long-word" : ""} ${
                              column.key === "sourceTitle"
                                ? `${isXS ? "w-[200px]" : isSM ? "w-[250px]" : "w-[300px]"} source-title`
                                : "flex-1"
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
                <div className="custom-row-content">
                  <div className="custom-checkbox"></div>
                  <div className="custom-content-wrapper">
                    <div
                      className="flex-1 p-[12px_16px] text-center text-gray-500 dm-sans-regular"
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
          <div className="flex flex-col sm:flex-row justify-evenly items-center mt-7 space-y-3 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <span className={`text-[15px] text-black dm-sans-regular ${isXS ? "text-[13px]" : ""}`}>
                Rows per page:
              </span>
              <select
                value={itemsPerPage}
                onChange={handleItemsPerPageChange}
                className={`border border-gray-300 text-black rounded px-2 py-1 text-[15px] focus:outline-none focus:ring-1 focus:ring-blue-500 dm-sans-regular ${
                  isXS ? "text-[13px]" : ""
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
                className={`pagination-button libre-franklin ${currentPage === 1 ? "disabled" : ""}`}
              >
                <IoIosArrowBack className={`text-[16px] font-semibold text-black ${isXS ? "text-[14px]" : ""}`} />
              </div>
              <span className={`text-[15px] text-black dm-sans-regular ${isXS ? "text-[13px]" : ""}`}>
                Page {currentPage} of {totalPages}
              </span>
              <div
                onClick={() => handlePageChange(currentPage + 1)}
                className={`pagination-button libre-franklin ${currentPage === totalPages ? "disabled" : ""}`}
              >
                <IoIosArrowForward className={`text-[16px] font-semibold text-black ${isXS ? "text-[14px]" : ""}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className="w-full flex flex-col items-center">
      <div
        style={{ backgroundImage: `url(${TeamBanner})` }}
        className="bg-cover roboto-regular flex-col bg-center w-full flex gap-y-0 items-center justify-center h-[60vh] min-h-[350px] max-h-[456px]"
      >
        <div className="text-white mb-7 text-center px-4 text-2xl sm:text-3xl md:text-[64px] font-extrabold leading-tight dm-sans-regular">
        Want to create FUTURE ?
        </div>
        <div className="text-[20px] mb-7 text-center">
        Explore new possibilities with us everyday. Create your mark on future with us.
        </div>
        <div className="bg-gradient-to-r text-black px-14 py-2 rounded-xl cursor-pointer text-lg sm:text-[20px] shadow-[0px_4px_6px_rgba(138,255,132,0.6),0px_4px_6px_rgba(44,107,193,0.6)] from-[#8AFF84] to-[#2C6BC1] font-bold">
        Join Us
        </div>
      </div>
      {/* Footer */}
      <div className="w-full flex border-t-3 border-[#8AFF84] mt-0 flex-col items-center">
      </div>
      <div className="w-[90%] md:w-[83%] flex flex-col">
        <Footer />
      </div>
      </div>
    </div>
  );
};

export default Publications;