import React from "react"

const PostLayout = ({ children }) => {
  return (
    <div class="lg:flex -mx-6">
      <div
        id="content-wrapper"
        class="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 xl:w-4/5"
      >
        <div id="content">
          <div id="app" class="flex">
            <div class="pt-24 pb-16 lg:pt-28 w-full">
              <div class="flex">
                <div class=" markdown px-6 xl:px-12 w-full max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:w-3/4">
                  {children}
                </div>

                <div class="hidden xl:text-sm xl:block xl:w-1/4 xl:px-6">
                  <div class="top-16 flex flex-col justify-between overflow-y-auto sticky  max-h-(screen-16) pt-12 pb-4 -mt-12">
                    <ul>
                      <li>DENEME</li>
                      <li>DENEME</li>
                      <li>DENEME</li>
                      <li>DENEME</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostLayout
