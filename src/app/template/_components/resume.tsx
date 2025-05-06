"use client";
import { ITemplate } from "@/interfaces";
import React, { useRef } from "react";
import Mustache from "mustache";
import usersGlobalStore, { IUsersStore } from "@/store/users-store";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import { useReactToPrint } from "react-to-print";

function Resume({ template }: { template: ITemplate }) {
  const router = useRouter();
  const { currentUserData }: IUsersStore = usersGlobalStore();
  if (!currentUserData?.profileDataForResume) {
    return <div>Profile data not found</div>;
  }
  const html = Mustache.render(
    template.html,
    currentUserData?.profileDataForResume
  );

  const componentRef: any = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  let showSaveBtn = false;

  if (!template.isOnlyForSubscribers || currentUserData?.currentSubscription) {
    showSaveBtn = true;
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-end gap-5">
        <Button onClick={() => router.push("/")} type="default">
          Back To Templates
        </Button>
        {showSaveBtn && (
          <Button type="primary" onClick={handlePrint}>
            Print Or Save PDF
          </Button>
        )}
      </div>

      {!showSaveBtn && (
        <div className="bg-red-500 bg-opacity-20 p-3 border-red-500 border text-sm">
          This template is only available for subscribers. Please subscribe to
          save or print this resume.
        </div>
      )}
      <div className="border border-gray-300 border-solid rounded-sm">
        <div dangerouslySetInnerHTML={{ __html: html }} ref={componentRef} />
      </div>
    </div>
  );
}

export default Resume;

// "use client";
// import { ITemplate } from "@/interfaces";
// import React, { useRef, useState, useMemo, useEffect } from "react";
// import Mustache from "mustache";
// import usersGlobalStore, { IUsersStore } from "@/store/users-store";
// import { Button, message } from "antd";
// import { useRouter } from "next/navigation";
// import { useReactToPrint } from "react-to-print";

// function Resume({ template }: { template: ITemplate }) {
//   const router = useRouter();
//   const { currentUserData }: IUsersStore = usersGlobalStore();
//   const componentRef = useRef<HTMLDivElement>(null);
//   const [renderError, setRenderError] = useState<string | null>(null);

//   // Track renders for debugging
//   const renderCount = useRef(0);
//   useEffect(() => {
//     renderCount.current += 1;
//     console.log(`Resume component rendered ${renderCount.current} times`);
//   });

//   // Check for missing profile data
//   if (!currentUserData?.profileDataForResume) {
//     return <div>Profile data not found</div>;
//   }

//   // Preprocess experience data to handle future endDate
//   const preprocessData = (data: any) => {
//     const today = new Date("2025-05-04"); // Use new Date() in production
//     const processedData = { ...data };

//     if (processedData.experience && Array.isArray(processedData.experience)) {
//       processedData.experience = processedData.experience.map((job: any) => {
//         const endDate = job.endDate ? new Date(job.endDate) : null;
//         const isFutureEndDate = endDate && endDate > today;
//         return {
//           ...job,
//           currentlyWorking: job.currentlyWorking || isFutureEndDate,
//         };
//       });
//     }

//     return processedData;
//   };

//   // Validate data structure
//   const validateData = (data: any) => {
//     if (!data.experience || !Array.isArray(data.experience)) {
//       return "Experience data is missing or not an array";
//     }
//     for (const job of data.experience) {
//       if (typeof job.currentlyWorking !== "boolean") {
//         return `Invalid currentlyWorking value for ${job.company}: must be a boolean`;
//       }
//       if (!job.currentlyWorking && !job.endDate) {
//         return `End date is required for ${job.company} when not currently working`;
//       }
//     }
//     return null;
//   };

//   // Memoize processed data and rendering
//   const { processedData, html, dataError } = useMemo(() => {
//     const processedData = preprocessData(currentUserData.profileDataForResume);
//     const dataError = validateData(processedData);

//     if (dataError) {
//       return { processedData, html: "", dataError };
//     }

//     let html = "";
//     try {
//       Mustache.parse(template.html); // Pre-parse to catch syntax errors
//       html = Mustache.render(template.html, processedData);
//     } catch (error: any) {
//       console.error("Mustache rendering error:", error);
//       setRenderError(`Failed to render template: ${error.message}`);
//       // Log template and snippet around error position
//       console.log("Template HTML:", template.html);
//       console.log(
//         "Template snippet around position 3634:",
//         template.html.substring(Math.max(0, 3634 - 50), 3634 + 50)
//       );
//       console.log("Processed Data:", processedData);
//     }

//     return { processedData, html, dataError };
//   }, [currentUserData.profileDataForResume, template.html]);

//   // Update renderError only when necessary
//   useEffect(() => {
//     if (html || dataError) {
//       setRenderError(null);
//     }
//   }, [html, dataError]);

//   // Handle print/save PDF
//   const handlePrint = useReactToPrint({
//     content: () => componentRef.current,
//     onPrintError: (error) => {
//       message.error("Failed to print or save PDF");
//       console.error("Print error:", error);
//     },
//   });

//   // Determine if save button should be shown
//   const showSaveBtn =
//     !template.isOnlyForSubscribers || currentUserData?.currentSubscription;

//   // Early return for data validation errors
//   if (dataError) {
//     return <div>Error: {dataError}</div>;
//   }

//   return (
//     <div className="flex flex-col gap-8">
//       {/* Action Buttons */}
//       <div className="flex justify-end gap-5">
//         <Button onClick={() => router.push("/")} type="default">
//           Back To Templates
//         </Button>
//         {showSaveBtn && (
//           <Button type="primary" onClick={handlePrint} disabled={!!renderError}>
//             Print Or Save PDF
//           </Button>
//         )}
//       </div>

//       {/* Subscription Warning */}
//       {!showSaveBtn && (
//         <div className="bg-red-500 bg-opacity-20 p-3 border-red-500 border text-sm">
//           This template is only available for subscribers. Please subscribe to
//           save or print this resume.
//         </div>
//       )}

//       {/* Render Error Message */}
//       {renderError && (
//         <div className="bg-red-500 bg-opacity-20 p-3 border-red-500 border text-sm">
//           {renderError}
//         </div>
//       )}

//       {/* Resume Content */}
//       <div className="border border-gray-300 border-solid rounded-sm">
//         <div
//           ref={componentRef}
//           dangerouslySetInnerHTML={{ __html: html }}
//         />
//       </div>
//     </div>
//   );
// }

// export default Resume;
