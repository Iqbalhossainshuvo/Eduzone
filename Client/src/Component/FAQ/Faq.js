import React from 'react';

const Faq = () => {
    return (
        <div className="text-green-400 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-white">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 text-white">
            <div>
            
            </div>
            <h2 className="text-green-400 max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="70326c9b-4a0f-429b-9c76-792941e326d5"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                    width="52"
                    height="24"
                  />
                </svg>
              
              </span>{' '}
              Some of question
            </h2>
           
          </div>
        </div>
        <div className="max-w-screen-xl sm:mx-auto text-green-400">
          <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2 text-white">
            <div className="space-y-8">
              <div>
                <p className="text-green-400 mb-4 text-xl font-medium">
                What is cors?
                </p>
                <p className="text-green-400">
                Cross-Origin Resource Sharing ... So then, what is CORS? Simply put, CORS is the mechanism that provides the ability to alter the behavior 
                  <br />
                  <br />
                 
                </p>
              </div>
              <div className='text-green-400'>
                <p className="mb-4 text-xl font-medium">
                Why are you using firebase? What other options do you have to implement authentication?
                </p>
                <p className="">
                The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
                  <br />
                  <br />
                  Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints
                </p>
              </div>
              <div className='text-green-400'>
                <p className="mb-4 text-xl font-medium">
                How does the private route work?
                </p>
                <p className="">
                The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                </p>
              </div>
            </div>
            <div className="text-green-400 space-y-8">
              <div>
                <p className="mb-4 text-xl font-medium">
                What is Node? How does Node work?
                </p>
                <p className="">
                Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return
                  <br />
                  <br />
                  Michael Knight a young loner on a crusade to champion the cause
                  of the innocent. The helpless. The powerless in a world of
                  criminals who operate above the law. Here he comes Here comes
                  Speed Racer. He's a demon on wheels.
                </p>
              </div>
          
            </div>
          </div>
        </div>
      </div>
    );
};

export default Faq;