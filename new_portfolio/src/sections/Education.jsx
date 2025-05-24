import React from "react";

function Education() {
  return (
    <div>
      {/* Education Section */}
      <div className="py-16 px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#1d1d1d] text-center mb-12">
          ACADEMIC JOURNEY SO FAR
        </h2>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* High School */}
            <div className="text-center bg-[#1d1d1d] p-4 rounded-xl">
              <h3 className="text-2xl font-medium text-white mb-4">
                High School
              </h3>
              <div className="text-6xl lg:text-7xl font-bold text-white mb-2">
                92.5%
              </div>
              <div className="text-white text-lg mb-2">2019-2020</div>
              <div className="text-white font-medium">
                Vanasthali Public School
              </div>
            </div>

            {/* Intermediate */}
            <div className="text-center bg-[#1d1d1d] p-4 rounded-xl">
              <h3 className="text-2xl font-medium text-white mb-4">
                Intermediate
              </h3>
              <div className="text-6xl lg:text-7xl font-bold text-white mb-2">
                94%
              </div>
              <div className="text-white text-lg mb-2">2021-2022</div>
              <div className="text-white font-medium">
                Vanasthali Public School
              </div>
            </div>

            {/* University */}
            <div className="text-center bg-[#1d1d1d] p-4 rounded-xl">
              <h3 className="text-2xl font-medium text-white mb-4">
                University
              </h3>
              <div className="text-6xl lg:text-7xl font-bold text-white mb-2">
                78%
              </div>
              <div className="text-white text-lg mb-2">2022-2026</div>
              <div className="text-white font-medium">
                K.I.E.T Group of Institutions
              </div>
              <div className="text-gray-300 text-sm mt-1">
                B.Tech (Computer Science)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
