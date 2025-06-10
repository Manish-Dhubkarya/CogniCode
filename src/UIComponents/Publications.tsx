import NavigationComponent from "./NavigationComponent";
import SearchIcon from "../assets/SearchIcon.svg";
import { IoIosArrowBack, IoIosArrowForward, IoMdCloseCircle } from "react-icons/io";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import TeamBanner from "../assets/TeamMemberPics/TeamBanner.gif";
import { CustomStyle } from "../UIComponentCSS/PublicationsCss";
import { IoFilter } from "react-icons/io5";

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

const TABLE_DATA: Publication[] = [
  {
    id: 1,
    sourceTitle: "Journal of Advanced Medicine",
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
    citeScore: 7.2,
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
  const [filters, setFilters] = useState<Filters>({
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
  const [width, setWidth] = useState(window.innerWidth);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [tableData, setTableData] = useState<Publication[]>(TABLE_DATA);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  // Handle window resize
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

  const TABLE_COLUMNS: {
    key: keyof Publication;
    label: string;
    render?: (value: any) => string;
    width: string;
  }[] = [
    { key: "sourceTitle", label: "Source Title", width: `${isXXS || isXS || isSM ? "min-w-[150px] w-[150px]" : isMD || isLG ? "min-w-[200px] w-[200px]" : "min-w-[300px] w-[300px]"}` },
    { key: "citeScore", label: "CiteScore", width: `${isXXS || isXS || isSM ? "min-w-[60px] w-[60px]" : isMD || isLG ? "min-w-[80px] w-[80px]" : "min-w-[90px] w-[90px]"}` },
    { key: "percentile", label: "Highest Percentile", render: (value) => `${value}% Q${Math.ceil(value / 25)}`, width: `${isXXS || isXS || isSM ? "min-w-[90px] w-[90px]" : isMD || isLG ? "min-w-[110px] w-[110px]" : "min-w-[130px] w-[130px]"}` },
    { key: "citations", label: "Citations 2024-25", width: `${isXXS || isXS || isSM ? "min-w-[90px] w-[90px]" : isMD || isLG ? "min-w-[110px] w-[110px]" : "min-w-[130px] w-[130px]"}` },
    { key: "documents", label: "Documents 2024-25", width: `${isXXS || isXS || isSM ? "min-w-[100px] w-[100px]" : isMD || isLG ? "min-w-[120px] w-[120px]" : "min-w-[150px] w-[150px]"}` },
    { key: "citedPercentage", label: "Cited", width: `${isXXS || isXS || isSM ? "min-w-[60px] w-[60px]" : isMD || isLG ? "min-w-[80px] w-[80px]" : "min-w-[100px] w-[100px]"}` },
  ];

  // Apply filters
  const applyFilters = (filtersToApply: Filters, search: string = searchQuery) => {
    let filteredData = [...TABLE_DATA];

    // Apply search filter
    if (search) {
      filteredData = filteredData.filter((row) =>
        Object.values(row).some((value) =>
          String(value).toLowerCase().includes(search.toLowerCase())
        )
      );
    }

    // Apply other filters
    if (!filtersToApply.noMinimum) {
      if (filtersToApply.minCitations) {
        const minCitations = parseInt(filtersToApply.minCitations);
        if (!isNaN(minCitations) && minCitations >= 0) {
          filteredData = filteredData.filter((row) => row.citations >= minCitations);
        }
      }
      if (filtersToApply.minDocuments) {
        const minDocuments = parseInt(filtersToApply.minDocuments);
        if (!isNaN(minDocuments) && minDocuments >= 0) {
          filteredData = filteredData.filter((row) => row.documents >= minDocuments);
        }
      }
    }

    if (filtersToApply.highestPercentile) {
      filteredData = filteredData.filter((row) => row.percentile >= 90);
    } else if (filtersToApply.quartile1 || filtersToApply.quartile2 || filtersToApply.quartile3 || filtersToApply.quartile4) {
      const selectedQuartiles: number[] = [];
      if (filtersToApply.quartile1) selectedQuartiles.push(1);
      if (filtersToApply.quartile2) selectedQuartiles.push(2);
      if (filtersToApply.quartile3) selectedQuartiles.push(3);
      if (filtersToApply.quartile4) selectedQuartiles.push(4);
      filteredData = filteredData.filter((row) => selectedQuartiles.includes(Math.ceil(row.percentile / 25)));
    }

    setTableData(filteredData);
    setFilters(filtersToApply);
    setCurrentPage(1);
    setSelectedRows(new Set());
  };

  // Update table data on search change
  useEffect(() => {
    applyFilters(filters, searchQuery);
  }, [searchQuery, filters]);

  // Pagination
  const paginatedData = tableData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const totalPages = Math.ceil(tableData.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      setSelectedRows(new Set());
    }
  };

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setItemsPerPage(value);
      setCurrentPage(1);
      setSelectedRows(new Set());
    }
  };

  const handleRowSelect = (id: number) => {
    setSelectedRows((prev) => {
      const newSelectedRows = new Set(prev);
      if (newSelectedRows.has(id)) {
        newSelectedRows.delete(id);
      } else {
        newSelectedRows.add(id);
      }
      return newSelectedRows;
    });
  };

  // Filter Panel Content
  const FilterPanelContent = ({ applyFilters }: { applyFilters: (filters: Filters, search?: string) => void }) => {
    const [pendingFilters, setPendingFilters] = useState<Filters>(filters);

    // Sync pendingFilters with parent filters
    useEffect(() => {
      setPendingFilters(filters);
    }, [filters]);

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
      setSearchQuery("");
      applyFilters(resetFilters, "");
    };

    const handleFilterChange = (filterName: keyof Filters, value: any) => {
      setPendingFilters((prev) => {
        const newFilters = { ...prev, [filterName]: value };
        let shouldAutoApply = false;

        // Handle checkbox unchecking
        if (typeof value === "boolean" && !value) {
          shouldAutoApply = true;
        }

        // Handle input clearing
        if (filterName === "minCitations" || filterName === "minDocuments") {
          if (value === "") {
            shouldAutoApply = true;
          }
        }

        // Handle noMinimum and clear inputs
        if (filterName === "noMinimum" && value) {
          newFilters.minCitations = "";
          newFilters.minDocuments = "";
          shouldAutoApply = true; // Auto-apply when checking noMinimum
        }

        // Handle highestPercentile and clear quartiles
        if (filterName === "highestPercentile" && value) {
          newFilters.quartile1 = false;
          newFilters.quartile2 = false;
          newFilters.quartile3 = false;
          newFilters.quartile4 = false;
        }

        // Handle quartiles and clear highestPercentile
        if (["quartile1", "quartile2", "quartile3", "quartile4"].includes(filterName) && value) {
          newFilters.highestPercentile = false;
        }

        // Apply filters automatically for unchecking or clearing
        if (shouldAutoApply) {
          applyFilters(newFilters);
        }

        return newFilters;
      });
    };

    return (
      <>
        <div className={`flex font-semibold justify-between flex-col text-black items-start ${isXL || is2XL || is3XL ? "" : "mt-5"} mb-4 px-4`}>
          <div className={`flex items-center justify-between w-full tracking-tight ${isXXS || isXS || isSM ? "text-[10px]" : isSM || isMD ? "text-[12px]" : isLG || isXL ? "text-[12px]" : "text-[16px]"}`}>
            Filter refine list
            {isXXS || isXS || isSM || isMD || isLG ? (
              <IoMdCloseCircle size={20} color="#ff5e36" onClick={() => setIsFilterOpen(false)} />
            ) : null}
          </div>
          <div className={`space-x-4 ${isXXS || isXS || isSM ? "text-[10px]" : isSM || isMD ? "text-[12px]" : isLG || isXL ? "text-[12px]" : "text-[16px]"} items-center mt-2 flex`}>
            <div
              className={`${isXXS || isXS || isSM ? "px-2 py-1 rounded-[5px]" : "px-5 py-2 rounded-[10px]"} cursor-pointer hover:border-[1px] hover:border-[#8AFF84] border-[1px] border-purple-500 hover:text-blue-500`}
              onClick={() => applyFilters(pendingFilters)}
            >
              Apply
            </div>
            <span>/</span>
            <div
              className={`${isXXS || isXS || isSM ? "px-2 py-1 rounded-[5px]" : "px-5 rounded-[10px] py-2"} cursor-pointer hover:border-[1px] hover:border-[#8AFF84] border-[1px] border-purple-500 hover:text-blue-500`}
              onClick={clearFilters}
            >
              Clear filters
            </div>
          </div>
        </div>
        <div className={`${isXXS || isXS || isSM ? "space-y-3" : isMD || isLG ? "space-y-4" : "space-y-7"} bg-custom-gradient p-5 rounded-[10px]`}>
          <div>
            <label className="flex items-start text-start space-x-6">
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
            <label className="flex items-start text-start space-x-6">
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
            <label className="flex items-start text-start space-x-6">
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
                <label className="flex items-start text-start space-x-6">
                  <input
                    type="checkbox"
                    checked={pendingFilters.minCitations !== ""}
                    onChange={() => handleFilterChange("minCitations", pendingFilters.minCitations ? "" : "0")}
                    className="rounded-full text-blue-500 focus:ring-blue-500 w-4 h-4"
                  />
                  <span className={`${isXXS || isXS ? "text-[10px]" : isSM ? "text-[11px]" : "text-[12px]"}`}>Enter number for minimum citations</span>
                </label>
                {pendingFilters.minCitations !== "" && (
                  <input
                    type="number"
                    value={pendingFilters.minCitations}
                    onChange={(e) => {
                      e.stopPropagation();
                      handleFilterChange("minCitations", e.target.value);
                    }}
                    className={`mt-1 w-full p-1 text-black rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 ${isXXS || isXS ? "text-[10px]" : isSM ? "text-[11px]" : "text-[12px]"}`}
                  />
                )}
              </div>
              <div>
                <label className="flex items-start text-start space-x-6">
                  <input
                    type="checkbox"
                    checked={pendingFilters.minDocuments !== ""}
                    onChange={() => handleFilterChange("minDocuments", pendingFilters.minDocuments ? "" : "0")}
                    className="rounded-full text-blue-500 focus:ring-blue-500 w-4 h-4"
                  />
                  <span className={`${isXXS || isXS ? "text-[10px]" : isSM ? "text-[11px]" : "text-[12px]"}`}>Enter number for minimum documents</span>
                </label>
                {pendingFilters.minDocuments !== "" && (
                  <input
                    type="number"
                    value={pendingFilters.minDocuments}
                    onChange={(e) => {
                      e.stopPropagation();
                      handleFilterChange("minDocuments", e.target.value);
                    }}
                    className={`mt-1 w-full p-1 text-black rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 ${isXXS || isXS ? "text-[10px]" : isSM ? "text-[11px]" : "text-[12px]"}`}
                  />
                )}
              </div>
            </>
          )}
          <div>
            <label className="flex items-start text-start space-x-6">
              <span className={`${isXXS || isXS ? "text-[12px]" : isSM ? "text-[13px]" : "text-[15px]"} font-semibold`}>Show titles in top 10 percent</span>
            </label>
            <label className="flex items-start text-start space-x-6 mt-2">
              <input
                type="checkbox"
                checked={pendingFilters.highestPercentile}
                onChange={() => handleFilterChange("highestPercentile", !pendingFilters.highestPercentile)}
                className="rounded-full text-blue-500 focus:ring-blue-500 w-4 h-4"
              />
              <span className={`${isXXS || isXS ? "text-[10px]" : isSM ? "text-[11px]" : "text-[12px]"}`}>Top 10%</span>
            </label>
            {!pendingFilters.highestPercentile && (
              <div className={`mt-4 ${isXXS || isXS || isSM ? "space-y-3" : isMD || isLG ? "space-y-4" : "space-y-7"}`}>
                <label className="flex items-start text-start space-x-6">
                  <input
                    type="checkbox"
                    checked={pendingFilters.quartile1}
                    onChange={() => handleFilterChange("quartile1", !pendingFilters.quartile1)}
                    className="rounded-full text-blue-500 focus:ring-blue-500 w-4 h-4"
                  />
                  <span className={`${isXXS || isXS ? "text-[10px]" : isSM ? "text-[11px]" : "text-[12px]"}`}>1st quartile</span>
                </label>
                <label className="flex items-start text-start space-x-6">
                  <input
                    type="checkbox"
                    checked={pendingFilters.quartile2}
                    onChange={() => handleFilterChange("quartile2", !pendingFilters.quartile2)}
                    className="rounded-full text-blue-500 focus:ring-blue-500 w-4 h-4"
                  />
                  <span className={`${isXXS || isXS ? "text-[10px]" : isSM ? "text-[11px]" : "text-[12px]"}`}>2nd quartile</span>
                </label>
                <label className="flex items-start text-start space-x-6">
                  <input
                    type="checkbox"
                    checked={pendingFilters.quartile3}
                    onChange={() => handleFilterChange("quartile3", !pendingFilters.quartile3)}
                    className="rounded-full text-blue-500 focus:ring-blue-500 w-4 h-4"
                  />
                  <span className={`${isXXS || isXS ? "text-[10px]" : isSM ? "text-[11px]" : "text-[12px]"}`}>3rd quartile</span>
                </label>
                <label className="flex items-start text-start space-x-6">
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
        </div>
      </>
    );
  };

  // Calculate minimum table width
  const getTableMinWidth = () => {
    return TABLE_COLUMNS.reduce((sum, col) => {
      const widthStr = col.width.match(/min-w-\[(\d+)px\]/)?.[1];
      return sum + (parseInt(widthStr || "0"));
    }, 15); // Add 15px for checkbox
  };

  return (
    <div className="flex flex-col min-h-screen mt-15 mb-10 font-sans libre-franklin">
      <NavigationComponent />
      <div className="flex bg-gray-100 flex-col py-5 px-5 w-full max-w-[1600px] mx-auto">
        <div className={`relative flex ${isXXS || isXS || isSM || isMD || isLG ? "flex-col" : "flex-row"} gap-6 w-full`}>
          {(isXL || is2XL || is3XL) && (
            <div className="z-10 flex-shrink-0 flex-col h-fit pt-5 w-[300px] text-[12px]">
              <FilterPanelContent applyFilters={applyFilters} />
            </div>
          )}
          {(isXXS || isXS || isSM || isMD || isLG) && (
            <>
              <div className={`flex ${isXXS || isXS || isSM || isMD ? "w-full" : "w-[90%]"} items-center justify-between mb-4 gap-4`}>
                <IoFilter className="ml-5" onClick={() => setIsFilterOpen(!isFilterOpen)} color="#3664ff" />
                <div className={`${isXXS || isXS ? "w-[60%]" : isSM ? "w-[70%]" : isMD ? "w-[75%]" : "w-[80%]"} flex-1`}>
                  <label htmlFor="search-small" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-2 flex items-center pr-3 pointer-events-none">
                      <img src={SearchIcon} alt="Search" className={`${isXXS || isXS ? "w-4 h-4" : "w-5 h-5"}`} />
                    </div>
                    <input
                      type="search"
                      id="search-small"
                      placeholder="Search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className={`block w-full p-2 pl-5 pr-15 text-gray-900 border border-[#1B7BFF] rounded-[5px] bg-gray-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${isXXS || isXS ? "text-xs" : isSM ? "text-sm" : "text-base"}`}
                    />
                  </div>
                </div>
              </div>
              <div
                className={`flex-shrink-0 flex-col h-fit px-4 py-5 bg-white shadow-lg absolute -top-10 -left-5 rounded-[5px] transform transition-transform duration-300 ease-in-out ${isFilterOpen ? "translate-x-0" : "-translate-x-full"} ${isXXS ? "w-[240px]" : isXS ? "w-[240px]" : isSM ? "w-[290px]" : isMD ? "w-[320px]" : "w-[320px]"}`}
              >
                <FilterPanelContent applyFilters={applyFilters} />
              </div>
            </>
          )}
          <div className={`flex-1 scrollbar-none ${isXXS || isXS || isSM || isMD || isLG ? "pt-0" : "pt-5"} overflow-x-auto`}>
            {(isXL || is2XL || is3XL) && (
              <div className="flex justify-center mb-4">
                <div className={`${isXL ? "w-[60%]" : "w-[50%]"}`}>
                  <label htmlFor="search-large" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-2 flex items-center pr-3 pointer-events-none">
                      <img src={SearchIcon} alt="Search" className="w-5 h-5" />
                    </div>
                    <input
                      type="search"
                      id="search-large"
                      placeholder="Search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className={`block w-full p-2 pl-5 pr-15 text-gray-900 border border-[#1B7BFF] rounded-[5px] bg-gray-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-base`}
                    />
                  </div>
                </div>
              </div>
            )}
            <div className="w-full">
              <div className={`${isXXS ? "min-w-[200px]" : isXS ? "min-w-[300px]" : isSM ? "min-w-[500px]" : isMD ? `min-w-[${getTableMinWidth()}px]` : isLG ? `min-w-[${getTableMinWidth()}px]` : isXL ? "min-w-[800px]" : "min-w-[1000px]"}`}>
                <CustomStyle />
                <div className="custom-row custom-header flex bg-gray-200 py-3 px-8">
                  {TABLE_COLUMNS.map((column, index) => (
                    <div
                      key={index}
                      className={`${column.width} px-2 font-semibold text-[#1B7BFF] libre-franklin ${isXXS || isXS ? "text-[12px]" : isSM ? "text-[13px]" : isMD ? "text-[14px]" : isLG ? "text-[15px]" : "text-[16px]"}`}
                    >
                      <div className={`w-full ${index === 0 ? "text-start" : "text-center"}`}>{column.label}</div>
                    </div>
                  ))}
                </div>
                {paginatedData.length > 0 ? (
                  paginatedData.map((row, i) => (
                    <div key={`${row.id}-${i}`} className={`custom-row-content w-fit flex text-black ${i === 0 ? "" : ""} pb-3 px-4`}>
                      <div className="border-b flex pt-5 pb-3 border-[#1B7BFF] w-full">
                        <div className="min-w-[15px] flex items-center">
                          <input
                            type="checkbox"
                            checked={selectedRows.has(row.id)}
                            onChange={() => handleRowSelect(row.id)}
                            className={`rounded text-blue-500 focus:ring-blue-500 ${isXXS || isXS ? "w-3 h-3" : "w-4 h-4"}`}
                          />
                        </div>
                        {TABLE_COLUMNS.map((column, index) => {
                          const value = column.render ? column.render(row[column.key]) : row[column.key];
                          const isLongWord = String(value).length > 30 && !String(value).includes(" ");
                          return (
                            <div
                              key={index}
                              className={`${column.width} ${index === 0 ? "text-start" : "text-center"} px-2 dm-sans-regular ${isLongWord ? "break-words" : ""} ${isXXS || isXS ? "text-[10px]" : isSM ? "text-[11px]" : isMD ? "text-[12px]" : isLG ? "text-[14px]" : isXL ? "text-[15px]" : "text-[16px]"}`}
                              style={{ fontWeight: 300, lineHeight: "1.2", letterSpacing: "-0.03em" }}
                            >
                              {value}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="custom-row-content flex text-gray-500 py-3 px-4">
                    <div className="min-w-[15px]"></div>
                    <div className="flex-1 px-2 text-center dm-sans-regular" style={{ fontWeight: 300, lineHeight: "1.2", letterSpacing: "-0.03em" }}>
                      No data available
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <div className={`${isXL ? "w-[60%]" : isXXS || isXS || isSM || isMD || isLG ? "w-[100%]" : "w-[70%]"} flex ${isXXS || isXS ? "flex-col" : "flex-row"} justify-between items-center mt-6 px-4`}>
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
            <div className={`flex ${isXXS || isXS || isSM || isMD ? "mr-5" : "mr-30"} items-center space-x-4`}>
              {isXXS || isXS || isSM ? (
                <IoIosArrowBack
                  className={`${currentPage === 1 ? "text-[#ff4200]" : "text-blue-700 cursor-pointer"} ${isXXS || isXS ? "text-[12px]" : isSM ? "text-[14px]" : "text-[16px]"}`}
                  onClick={currentPage > 1 ? () => handlePageChange(currentPage - 1) : undefined}
                />
              ) : (
                <div
                  className={`p-2 rounded-full ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:text-[#ff4200] hover:bg-[#d1fdff] hover:border-purple-500"} border-[1px] border-gray-400 text-blue-700`}
                  onClick={currentPage > 1 ? () => handlePageChange(currentPage - 1) : undefined}
                >
                  <IoIosArrowBack />
                </div>
              )}
              <span className={`text-black dm-sans-regular ${isXXS || isXS ? "text-[10px]" : isSM ? "text-[11px]" : isMD ? "text-[12px]" : isLG ? "text-[13px]" : "text-[14px]"}`}>
                Page {currentPage} of {totalPages}
              </span>
              {isXXS || isXS || isSM ? (
                <IoIosArrowForward
                  className={`${currentPage === totalPages ? "text-[#ff4200]" : "text-blue-700 cursor-pointer"} ${isXXS || isXS ? "text-[12px]" : isSM ? "text-[14px]" : "text-[16px]"}`}
                  onClick={currentPage < totalPages ? () => handlePageChange(currentPage + 1) : undefined}
                />
              ) : (
                <div
                  className={`p-2 rounded-full ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:text-[#ff4200] hover:bg-[#d1fdff] hover:border-purple-500"} border-[1px] border-gray-400 text-blue-700`}
                  onClick={currentPage < totalPages ? () => handlePageChange(currentPage + 1) : undefined}
                >
                  <IoIosArrowForward />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
              <div
            style={{ backgroundImage: `url(${TeamBanner})` 
                // backgroundImage: 'linear-gradient(180deg, #8AFF84 0%, #97BBCB 45.5%, #004EB9 100%)',
          
          }}
            className={`bg-cover roboto-regular w-full flex flex-col gap-y-0 items-center justify-center
 ${
  isXXS
    ? "h-[180px]"
    : isXS
    ? "h-[210px]"
    : isSM
    ? "h-[240px]"
    : isMD
    ? "h-[300px]"
    : isLG
    ? "h-[360px]"
    : isXL
    ? "h-[420px]"
    : is2XL
    ? "h-[541px]"
    : is3XL
    ? "h-[560px]"
    : ""
}`}
          >
            <div
              className={`text-white ${
                isXXS || isXS || isSM
                  ? "mb-2 text-[20px]"
                  : isMD
                  ? "mb-4 text-[30px]"
                  : isLG
                  ? "mb-5 text-[40px]"
                  : "mb-7 text-[64px]"
              } text-center px-4 font-extrabold leading-tight dm-sans-regular`}
            >
              Want to create FUTURE?
            </div>
            <div
              className={`text-center px-2 ${
                isXXS || isXS || isSM
                  ? "mb-2"
                  : isMD
                  ? "mb-4"
                  : isLG
                  ? "mb-5"
                  : "mb-7"
              } ${
                isXXS
                  ? "text-[12px]"
                  : isXS
                  ? "text-[14px]"
                  : isSM
                  ? "text-[12px]"
                  : isMD
                  ? "text-[14px]"
                  : isLG
                  ? "text-[17px]"
                  : isXL
                  ? "text-[19px]"
                  : "text-[20px]"
              }`}
            >
              Explore new possibilities with us everyday. Create your mark on
              future with us.
            </div>
            <div
              className={`bg-gradient-to-r text-black ${
                isXXS || isXS
                  ? "px-4 py-0.5 text-[10px]"
                  : isSM
                  ? "px-6 py-1 text-[14px]"
                  : isMD
                  ? "px-8 py-1 text-[14px]"
                  : isLG
                  ? "px-10 py-1.5 text-[16px]"
                  : "px-14 py-2 text-lg sm:text-[20px]"
              } rounded-xl cursor-pointer mt-3 shadow-[0px_4px_16px_rgba(138,255,132,0.2),0px_4px_16px_rgba(44,107,193,0.2)] from-[#8AFF84] to-[#2C6BC1] font-bold`}
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