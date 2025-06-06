import NavigationComponent from "./NavigationComponent";
import SearchIcon from "../assets/SearchIcon.svg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaFilter } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import TeamBanner from "../assets/TeamMemberPics/TeamBanner.gif";
import { CustomStyle } from "../UIComponentCSS/PublicationsCss";

interface Publication {
  id: number;
  sourceTitle: string;
  citeScore: number;
  percentile: number;
  citations: number;
  documents: number;
  citedPercentage: number;
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

// Define table data separately
const TABLE_DATA: Publication[] = [
  {
    id: 1,
    sourceTitle: "Journal ",
    citeScore: 12.5,
    percentile: 95,
    citations: 780432,
    documents: 142,
    citedPercentage: 92,
  },
  {
    id: 2,
    sourceTitle: "Global Medical Innovations",
    citeScore: 8.7,
    percentile: 88,
    citations: 450123,
    documents: 98,
    citedPercentage: 85,
  },
  {
    id: 3,
    sourceTitle: "Biomedical Engineering Review",
    citeScore: 6.3,
    percentile: 75,
    citations: 320987,
    documents: 76,
    citedPercentage: 78,
  },
  {
    id: 4,
    sourceTitle: "Clinical Trials and Insights",
    citeScore: 15.2,
    percentile: 98,
    citations: 950234,
    documents: 165,
    citedPercentage: 94,
  },
  {
    id: 5,
    sourceTitle: "Neuroscience Advances",
    citeScore: 10.1,
    percentile: 90,
    citations: 620543,
    documents: 112,
    citedPercentage: 89,
  },
  {
    id: 6,
    sourceTitle: "Public Health Perspectives",
    citeScore: 4.8,
    percentile: 65,
    citations: 210456,
    documents: 54,
    citedPercentage: 70,
  },
  {
    id: 7,
    sourceTitle: "Cardiology Research Journal",
    citeScore: 9.4,
    percentile: 87,
    citations: 510789,
    documents: 103,
    citedPercentage: 86,
  },
  {
    id: 8,
    sourceTitle: "Environmental Health Studies",
    citeScore: 7.2,
    percentile: 80,
    citations: 390654,
    documents: 88,
    citedPercentage: 82,
  },
  {
    id: 9,
    sourceTitle: "Genomics and Proteomics",
    citeScore: 11.8,
    percentile: 93,
    citations: 720321,
    documents: 134,
    citedPercentage: 91,
  },
  {
    id: 10,
    sourceTitle: "Immunology Today",
    citeScore: 5.9,
    percentile: 70,
    citations: 280987,
    documents: 67,
    citedPercentage: 75,
  },
  {
    id: 11,
    sourceTitle: "Pediatric Research Journal",
    citeScore: 8.1,
    percentile: 85,
    citations: 430876,
    documents: 95,
    citedPercentage: 84,
  },
  {
    id: 12,
    sourceTitle: "Molecular Biology Insights",
    citeScore: 13.6,
    percentile: 96,
    citations: 890123,
    documents: 150,
    citedPercentage: 93,
  },
  {
    id: 13,
    sourceTitle: "Infectious Disease Reports",
    citeScore: 6.7,
    percentile: 78,
    citations: 350432,
    documents: 80,
    citedPercentage: 79,
  },
  {
    id: 14,
    sourceTitle: "Cancer Therapy Advances",
    citeScore: 14.3,
    percentile: 97,
    citations: 910654,
    documents: 160,
    citedPercentage: 95,
  },
  {
    id: 15,
    sourceTitle: "Neurology Frontiers",
    citeScore: 9.8,
    percentile: 89,
    citations: 570987,
    documents: 108,
    citedPercentage: 87,
  },
  {
    id: 16,
    sourceTitle: "Pharmacology Reviews",
    citeScore: 7.5,
    percentile: 82,
    citations: 410321,
    documents: 90,
    citedPercentage: 83,
  },
  {
    id: 17,
    sourceTitle: "Bioinformatics Journal",
    citeScore: 10.5,
    percentile: 91,
    citations: 650432,
    documents: 120,
    citedPercentage: 90,
  },
  {
    id: 18,
    sourceTitle: "Endocrinology Studies",
    citeScore: 5.4,
    percentile: 68,
    citations: 260789,
    documents: 60,
    citedPercentage: 72,
  },
  {
    id: 19,
    sourceTitle: "Surgical Innovations",
    citeScore: 8.9,
    percentile: 86,
    citations: 480123,
    documents: 100,
    citedPercentage: 85,
  },
  {
    id: 20,
    sourceTitle: "Epidemiology Trends",
    citeScore: 6.1,
    percentile: 73,
    citations: 300654,
    documents: 70,
    citedPercentage: 76,
  },
];

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
    width: string;
  }[] = [
    { key: "sourceTitle", label: "Source Title", width: "min-w-[400px] w-[400px]" },
    { key: "citeScore", label: "CiteScore", width: "min-w-[100px] w-[100px]" },
    { key: "percentile", label: "Highest Percentile", render: (value) => `${value}% Q${Math.ceil(value / 25)}`, width: "min-w-[150px] w-[150px]" },
    { key: "citations", label: "Citations 2024-25", width: "min-w-[150px] w-[150px]" },
    { key: "documents", label: "Documents 2024-25", width: "min-w-[150px] w-[150px]" },
    { key: "citedPercentage", label: "Cited", width: "min-w-[100px] w-[100px]" },
  ];

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Breakpoints
  const isXXS = width <= 200;
  const isXS = width > 200 && width <= 300;
  const isSM = width > 300 && width <= 500;
  const isMD = width > 500 && width <= 700;
  const isLG = width > 700 && width <= 900;
  const isXL = width > 900 && width <= 1200;
  const is2XL = width > 1200 && width <= 1600;
  const is3XL = width > 1600;

  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [tableData, setTableData] = React.useState<Publication[]>(TABLE_DATA);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = React.useState<number>(10);
  const [selectedRows, setSelectedRows] = React.useState<Set<number>>(new Set());
  const [pendingFilters, setPendingFilters] = React.useState<Filters>(filters);
  const [isFilterOpen, setIsFilterOpen] = React.useState<boolean>(false);

  const applyFilters = () => {
    let filteredData = [...TABLE_DATA];

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
    if (!(is2XL || is3XL)) setIsFilterOpen(false);
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
    setTableData(TABLE_DATA);
    setCurrentPage(1);
    setSelectedRows(new Set());
    if (!(is2XL || is3XL)) setIsFilterOpen(false);
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

  // Common Filter Panel Content
  const FilterPanelContent = () => (
    <>
      <div className="flex font-semibold justify-between flex-col text-black items-start mb-4 px-4">
        <div className="tracking-tight">Filter refine list</div>
        <div className={`space-x-4 items-center mt-2 ${isXXS || isXS || isSM || isMD || isLG || isXL ? "hidden" : "flex"}`}>
          <div
            className="px-5 py-2 rounded-[10px] cursor-pointer hover:border-[1px] hover:border-[#8AFF84] border-[1px] border-purple-500 hover:text-blue-500"
            onClick={applyFilters}
          >
            Apply
          </div>
          <span>/</span>
          <div
            className="px-5 py-2 rounded-[10px] cursor-pointer hover:border-[1px] hover:border-[#8AFF84] border-[1px] border-purple-500 hover:text-blue-500"
            onClick={clearFilters}
          >
            Clear filters
          </div>
        </div>
      </div>
      <div className="space-y-7 bg-custom-gradient p-5 rounded-[10px]">
        <div>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={pendingFilters.openAccess}
              onChange={() => handleFilterChange("openAccess", !pendingFilters.openAccess)}
              className="rounded-full text-blue-500 focus:ring-blue-500 w-4 h-4"
            />
            <span className={`${isXXS || isXS ? "text-[10px]" : isSM ? "text-[11px]" : "text-[12px]"}`}>Display only Open Access journals</span>
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
            <span className={`${isXXS || isXS ? "text-[10px]" : isSM ? "text-[11px]" : "text-[12px]"}`}>Counts for 4-year timeframe</span>
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
            <span className={`${isXXS || isXS ? "text-[10px]" : isSM ? "text-[11px]" : "text-[12px]"}`}>No minimum selected</span>
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
                <span className={`${isXXS || isXS ? "text-[10px]" : isSM ? "text-[11px]" : "text-[12px]"}`}>Enter number for minimum citations</span>
              </label>
              {pendingFilters.minCitations !== "" && (
                <input
                  type="number"
                  value={pendingFilters.minCitations}
                  onChange={(e) => handleFilterChange("minCitations", e.target.value)}
                  className={`mt-1 w-full p-1 text-black rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 ${isXXS || isXS ? "text-[10px]" : isSM ? "text-[11px]" : "text-[12px]"}`}
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
                <span className={`${isXXS || isXS ? "text-[10px]" : isSM ? "text-[11px]" : "text-[12px]"}`}>Enter number for minimum documents</span>
              </label>
              {pendingFilters.minDocuments !== "" && (
                <input
                  type="number"
                  value={pendingFilters.minDocuments}
                  onChange={(e) => handleFilterChange("minDocuments", e.target.value)}
                  className={`mt-1 w-full p-1 text-black rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 ${isXXS || isXS ? "text-[10px]" : isSM ? "text-[11px]" : "text-[12px]"}`}
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
            <span className={`${isXXS || isXS ? "text-[10px]" : isSM ? "text-[11px]" : "text-[12px]"}`}>Show titles in top 10 percent</span>
          </label>
          {!pendingFilters.highestPercentile && (
            <div className="mt-4 space-y-1">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={pendingFilters.quartile1}
                  onChange={() => handleFilterChange("quartile1", !pendingFilters.quartile1)}
                  className="rounded-full text-blue-500 focus:ring-blue-500 w-4 h-4"
                />
                <span className={`${isXXS || isXS ? "text-[10px]" : isSM ? "text-[11px]" : "text-[12px]"}`}>1st quartile</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={pendingFilters.quartile2}
                  onChange={() => handleFilterChange("quartile2", !pendingFilters.quartile2)}
                  className="rounded-full text-blue-500 focus:ring-blue-500 w-4 h-4"
                />
                <span className={`${isXXS || isXS ? "text-[10px]" : isSM ? "text-[11px]" : "text-[12px]"}`}>2nd quartile</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={pendingFilters.quartile3}
                  onChange={() => handleFilterChange("quartile3", !pendingFilters.quartile3)}
                  className="rounded-full text-blue-500 focus:ring-blue-500 w-4 h-4"
                />
                <span className={`${isXXS || isXS ? "text-[10px]" : isSM ? "text-[11px]" : "text-[12px]"}`}>3rd quartile</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={pendingFilters.quartile4}
                  onChange={() => handleFilterChange("quartile4", !pendingFilters.quartile4)}
                  className="rounded-full text-blue-500 focus:ring-blue-500 w-4 h-4"
                />
                <span className={`${isXXS || isXS ? "text-[10px]" : isSM ? "text-[11px]" : "text-[12px]"}`}>4th quartile</span>
              </label>
            </div>
          )}
        </div>
        <div className={`flex space-x-4 items-center mt-4 ${isXXS || isXS || isSM || isMD || isLG || isXL ? "block" : "hidden"}`}>
          <div
            className="px-5 py-2 rounded-[10px] cursor-pointer hover:border-[1px] hover:border-[#8AFF84] border-[1px] border-purple-500 hover:text-blue-500"
            onClick={applyFilters}
          >
            Apply
          </div>
          <span>/</span>
          <div
            className="px-5 py-2 rounded-[10px] cursor-pointer hover:border-[1px] hover:border-[#8AFF84] border-[1px] border-purple-500 hover:text-blue-500"
            onClick={clearFilters}
          >
            Clear filters
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="flex flex-col min-h-screen mt-15 mb-10 font-sans libre-franklin">
      <NavigationComponent />
      <div className="flex bg-gray-100 flex-col px-5 w-full max-w-[1600px] mx-auto">
        {/* Main Content Layout */}
        <div className={`relative flex ${isXXS || isXS || isSM || isMD || isLG || isXL ? "flex-col" : "flex-row"} gap-6 w-full`}>
          {/* Filter Panel for Big Screens (2XL and above) */}
          {(is2XL || is3XL) && (
            <div className="z-10 flex-shrink-0 flex-col h-fit pt-5 w-[320px] text-[12px]">
              <FilterPanelContent />
            </div>
          )}

          {/* Filter Toggle Icon and Drawer for Small Screens (XL and below) */}
          {(isXXS || isXS || isSM || isMD || isLG || isXL) && (
            <>
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="absolute top-5 left-5 z-50 flex items-center space-x-2 px-4 py-2 rounded-lg bg-purple-500 text-white hover:bg-purple-600"
                style={{ top: isFilterOpen ? '5rem' : '2.5rem' }}
              >
                <FaFilter className={`${isXXS || isXS ? "w-4 h-4" : isSM ? "w-5 h-5" : "w-6 h-6"}`} />
                <span className={`${isXXS ? "text-[10px]" : isXS ? "text-[10px]" : isSM ? "text-[12px]" : "text-[14px]"}`}>{isFilterOpen ? "Hide Filters" : "Show Filters"}</span>
              </button>
              <div
                className={`z-40 flex-shrink-0 flex-col h-full pt-5 bg-white shadow-lg fixed top-0 left-0 transform transition-transform duration-300 ease-in-out ${isFilterOpen ? "translate-x-0" : "-translate-x-full"} ${isXXS ? "w-[180px]" : isXS ? "w-[200px]" : isSM ? "w-[220px]" : isMD ? "w-[240px]" : isLG ? "w-[260px]" : isXL ? "w-[280px]" : ""}`}
              >
                <FilterPanelContent />
              </div>
            </>
          )}

          {/* Table Section */}
          <div className={`flex-1 ${isXXS || isXS || isSM || isMD || isLG || isXL ? "pt-20" : "pt-5"} overflow-x-auto`}>
            {/* Search Container */}
            <div className="flex justify-center mb-4">
              <div className={`${isXXS || isXS ? "w-full" : isSM ? "w-[90%]" : isMD ? "w-[80%]" : isLG ? "w-[70%]" : isXL ? "w-[60%]" : "w-[50%]"}`}>
                <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-2 flex items-center pr-3 pointer-events-none">
                    <img src={SearchIcon} alt="Search" className={`${isXXS || isXS ? "w-4 h-4" : "w-5 h-5"}`} />
                  </div>
                  <input
                    type="search"
                    id="search"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={`block w-full p-2 pl-5 pr-10 text-gray-900 border border-[#1B7BFF] rounded-[5px] bg-gray-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${isXXS || isXS ? "text-xs" : isSM ? "text-sm" : "text-base"}`}
                  />
                </div>
              </div>
            </div>

            {/* Custom Div-based Table */}
            <div className="w-full">
              <div className="min-w-[1050px]">
                <CustomStyle />
                {/* Header Row */}
                <div className="custom-row custom-header flex bg-gray-200 py-3 px-4">
                  <div className="min-w-[50px] flex items-center">
                    {/* Select All Checkbox (Hidden for now) */}
                  </div>
                  {TABLE_COLUMNS.map((column, index) => (
                    <div
                      key={index}
                      className={`${column.width} px-2 font-semibold text-[#1B7BFF] libre-franklin ${isXXS || isXS ? "text-[12px]" : isSM ? "text-[13px]" : isMD ? "text-[14px]" : isLG ? "text-[15px]" : "text-[16px]"}`}
                    >
                      {column.label}
                    </div>
                  ))}
                </div>

                {/* Data Rows */}
                {paginatedData.length > 0 ? (
                  paginatedData.map((row) => (
                    <div key={row.id} className="custom-row-content flex text-black py-3 px-4 border-b border-gray-300">
                      <div className="min-w-[50px] flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedRows.has(row.id)}
                          onChange={() => handleRowSelect(row.id)}
                          className={`rounded text-blue-500 focus:ring-blue-500 ${isXXS || isXS ? "w-4 h-4" : "w-6 h-6"}`}
                        />
                      </div>
                      {TABLE_COLUMNS.map((column, index) => {
                        const value = column.render ? column.render(row[column.key]) : row[column.key];
                        const isLongWord = String(value).length > 30 && !String(value).includes(" ");
                        return (
                          <div
                            key={index}
                            className={`${column.width} px-2 dm-sans-regular ${isLongWord ? "break-words" : ""} ${isXXS || isXS ? "text-[10px]" : isSM ? "text-[11px]" : isMD ? "text-[12px]" : isLG ? "text-[14px]" : isXL ? "text-[15px]" : "text-[16px]"}`}
                            style={{ fontWeight: 300, lineHeight: "1.2", letterSpacing: "-0.03em" }}
                          >
                            {value}
                          </div>
                        );
                      })}
                    </div>
                  ))
                ) : (
                  <div className="custom-row-content flex text-gray-500 py-3 px-4">
                    <div className="min-w-[50px]"></div>
                    <div className="flex-1 px-2 text-center dm-sans-regular" style={{ fontWeight: 300, lineHeight: "1.2", letterSpacing: "-0.03em" }}>
                      No data available
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Pagination Section */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-6 space-y-3 sm:space-y-0 px-4">
              <div className="flex items-center space-x-2">
                <span className={`text-black dm-sans-regular ${isXXS || isXS ? "text-[10px]" : isSM ? "text-[11px]" : isMD ? "text-[12px]" : isLG ? "text-[13px]" : "text-[14px]"}`}>
                  Rows per page:
                </span>
                <select
                  value={itemsPerPage}
                  onChange={handleItemsPerPageChange}
                  className={`border border-gray-300 text-black rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500 dm-sans-regular ${isXXS || isXS ? "text-[10px]" : isSM ? "text-[11px]" : isMD ? "text-[12px]" : isLG ? "text-[13px]" : "text-[14px]"}`}
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={15}>15</option>
                  <option value={20}>20</option>
                </select>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  className={`pagination-button libre-franklin ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:text-blue-500"}`}
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <IoIosArrowBack className={`text-black ${isXXS || isXS ? "text-[12px]" : isSM ? "text-[14px]" : "text-[16px]"}`} />
                </button>
                <span className={`text-black dm-sans-regular ${isXXS || isXS ? "text-[10px]" : isSM ? "text-[11px]" : isMD ? "text-[12px]" : isLG ? "text-[13px]" : "text-[14px]"}`}>
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  className={`pagination-button libre-franklin ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:text-blue-500"}`}
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <IoIosArrowForward className={`text-black ${isXXS || isXS ? "text-[12px]" : isSM ? "text-[14px]" : "text-[16px]"}`} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full flex flex-col items-center">
        <div
          style={{ backgroundImage: `url(${TeamBanner})` }}
          className="bg-cover roboto-regular bg-center w-full flex flex-col gap-y-0 items-center justify-center h-[60vh] min-h-[350px] max-h-[456px]"
        >
          <div
            className={`text-white mb-7 text-center px-4 font-extrabold leading-tight dm-sans-regular ${isXXS ? "text-lg" : isXS ? "text-xl" : isSM ? "text-2xl" : isMD ? "text-3xl" : isLG ? "text-4xl" : isXL ? "text-5xl" : "text-[64px]"}`}
          >
            Want to create FUTURE ?
          </div>
          <div
            className={`text-center mb-7 ${isXXS ? "text-[12px]" : isXS ? "text-[14px]" : isSM ? "text-[16px]" : isMD ? "text-[18px]" : isXL ? "text-[19px]" : "text-[20px]"}`}
          >
            Explore new possibilities with us everyday. Create your mark on future with us.
          </div>
          <div
            className={`bg-gradient-to-r text-black rounded-xl cursor-pointer font-bold from-[#8AFF84] to-[#2C6BC1] shadow-[0px_4px_6px_rgba(138,255,132,0.6),0px_4px_6px_rgba(44,107,193,0.6)] ${isXXS ? "px-6 py-1 text-xs" : isXS ? "px-8 py-1 text-sm" : isSM ? "px-10 py-2 text-base" : isMD ? "px-12 py-2 text-lg" : isXL ? "px-13 py-2 text-lg" : "px-14 py-2 text-[20px]"}`}
          >
            Join Us
          </div>
        </div>
        <div className="w-full flex border-t-3 border-[#8AFF84] mt-0 flex-col items-center">
          <div className="w-[90%] md:w-[83%] flex flex-col">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;