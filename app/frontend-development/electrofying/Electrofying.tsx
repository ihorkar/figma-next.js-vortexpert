"use client";
/* eslint-disable react/no-unescaped-entities */
import Headline from "@/components/shared/Headline";
import Image from "next/image";
import expertise from "../../assets/images/frontend/expertise-section-pattern.png";

export default function Electrofying() {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto px-4 space-y-10 lg:space-y-16">
        <div className="grid grid-cols-1 xl:grid-cols-12 justify-between">
          <div className="xl:col-span-6 space-y-5 py-16 xl:py-24">
            <div className="space-y-2">
              <h5 className="font-medium text-gray-400 text-lg uppercase">
                Unleashing Digital Marvels
              </h5>
              <Headline>
                <div className="text-start text-gray-800">
                  Electrifying Frontend Development Services!
                </div>
              </Headline>
            </div>
            <p className="text-gray-500 lg:text-lg">
              Every step of the way, we focus on speed, reliability and user
              satisfaction, so that each of our projects becomes an engaging and
              intuitive flow. With attention to detail, we create eye-catching
              animations, smooth transition effects and engaging interactions to
              ensure that the interfaces we build truly reflect your brand
              identity and business goals. From website development to complex
              web applications, we are committed to providing frontend solutions
              that are innovative, creative and tailored to your unique needs.
              Make your digital experience memorable and extraordinary with the
              Frontend Development services that we offer.
            </p>
          </div>
          <div className=""></div>
          {/* <Image
            src={expertise}
            alt="hero-image"
            className="xl:col-span-5 w-full object-contain pb-12 lg:pb-0"
          /> */}
          <div className="xl:col-span-5 w-full pb-12 lg:pb-0">
            <ElectrifyingImage />
          </div>
        </div>
      </div>
    </div>
  );
}


function ElectrifyingImage() {
  return <svg className="w-full" viewBox="0 0 740 703" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M740 0H58.4993L49.464 18.3912C-78.2407 278.33 53.5479 554.577 304.715 666.463L386.734 703L740 0Z" fill="url(#paint0_linear_2585_9)" />
    <path fillRule="evenodd" clipRule="evenodd" d="M740 0H513.447L510.443 6.12166C467.99 92.6446 511.801 184.596 595.297 221.838L622.563 234L740 0Z" fill="#74CAAD" />
    <path d="M77 223C77 218.582 80.5817 215 85 215H585C589.418 215 593 218.582 593 223V539H77V223Z" fill="url(#paint1_linear_2585_9)" />
    <path d="M102 249C102 244.582 105.582 241 110 241H560C564.418 241 568 244.582 568 249V539H102V249Z" fill="url(#paint2_linear_2585_9)" />
    <path d="M150.697 462.747C150.342 462.989 149.923 463.121 149.493 463.125C149.063 463.129 148.641 463.006 148.281 462.77C147.922 462.535 147.64 462.198 147.471 461.803C147.303 461.407 147.255 460.97 147.335 460.548C147.415 460.125 147.618 459.736 147.919 459.429C148.22 459.122 148.605 458.911 149.026 458.823C149.447 458.735 149.884 458.773 150.283 458.934C150.682 459.094 151.024 459.369 151.267 459.724C151.592 460.201 151.715 460.787 151.608 461.354C151.501 461.92 151.173 462.422 150.697 462.747Z" fill="white" />
    <path d="M174.896 485.544L149.471 460.951L168.597 392.483L194.023 417.076L174.896 485.544Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M83.5277 452.268L149.469 460.951" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M108.953 476.861L83.5274 452.268L102.654 383.801L128.08 408.395L108.953 476.861Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M103.881 385.597C103.646 385.758 103.38 385.871 103.101 385.929C102.821 385.988 102.533 385.99 102.252 385.937C101.972 385.885 101.704 385.777 101.465 385.62C101.226 385.464 101.02 385.262 100.859 385.026C100.698 384.79 100.585 384.525 100.527 384.246C100.468 383.966 100.465 383.678 100.518 383.397C100.571 383.117 100.679 382.849 100.835 382.61C100.991 382.371 101.193 382.165 101.429 382.004C101.906 381.679 102.492 381.557 103.058 381.664C103.625 381.771 104.126 382.098 104.451 382.574C104.776 383.051 104.899 383.637 104.792 384.204C104.685 384.77 104.358 385.271 103.881 385.597Z" fill="white" />
    <path d="M139.029 469.692C158.369 469.551 173.934 453.758 173.793 434.418C173.652 415.077 157.86 399.513 138.519 399.653C119.179 399.794 103.614 415.587 103.755 434.927C103.895 454.268 119.688 469.832 139.029 469.692Z" fill="url(#paint3_radial_2585_9)" />
    <path d="M194.022 417.078L174.895 485.545L108.952 476.862L128.078 408.393L194.022 417.078Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M126.962 410.259C127.992 410.876 129.328 410.541 129.945 409.511C130.562 408.481 130.227 407.146 129.197 406.529C128.167 405.911 126.832 406.246 126.215 407.276C125.597 408.306 125.932 409.642 126.962 410.259Z" fill="white" />
    <path d="M176.121 487.34C175.766 487.582 175.347 487.714 174.917 487.718C174.487 487.722 174.065 487.599 173.705 487.364C173.345 487.128 173.063 486.791 172.895 486.396C172.727 486 172.679 485.564 172.759 485.141C172.839 484.719 173.042 484.329 173.343 484.022C173.644 483.715 174.029 483.504 174.45 483.416C174.871 483.328 175.308 483.366 175.707 483.527C176.106 483.687 176.448 483.963 176.691 484.318C176.852 484.554 176.965 484.819 177.024 485.098C177.082 485.378 177.085 485.666 177.032 485.947C176.979 486.228 176.871 486.495 176.715 486.734C176.559 486.973 176.357 487.179 176.121 487.34Z" fill="white" />
    <path d="M195.25 418.872C194.895 419.115 194.475 419.246 194.046 419.25C193.616 419.255 193.194 419.131 192.834 418.896C192.474 418.66 192.192 418.324 192.024 417.928C191.855 417.532 191.808 417.096 191.888 416.673C191.967 416.251 192.171 415.861 192.472 415.554C192.773 415.247 193.158 415.036 193.579 414.948C194 414.86 194.437 414.899 194.836 415.059C195.235 415.22 195.577 415.495 195.82 415.85C196.145 416.326 196.268 416.912 196.161 417.479C196.054 418.046 195.726 418.547 195.25 418.872Z" fill="white" />
    <path d="M167.072 394.032C167.928 394.874 169.304 394.864 170.147 394.009C170.99 393.154 170.98 391.777 170.125 390.934C169.269 390.092 167.893 390.102 167.05 390.957C166.207 391.812 166.217 393.189 167.072 394.032Z" fill="white" />
    <path d="M84.7542 454.063C84.399 454.305 83.98 454.437 83.55 454.441C83.12 454.446 82.6984 454.322 82.3385 454.087C81.9785 453.852 81.6965 453.515 81.5279 453.119C81.3594 452.724 81.312 452.287 81.3916 451.864C81.4713 451.442 81.6744 451.052 81.9754 450.745C82.2764 450.438 82.6617 450.227 83.0826 450.139C83.5034 450.051 83.941 450.09 84.3399 450.25C84.7388 450.411 85.0812 450.686 85.3237 451.041C85.4848 451.277 85.5978 451.542 85.6563 451.821C85.7149 452.101 85.7178 452.389 85.6649 452.67C85.612 452.95 85.5043 453.218 85.3481 453.457C85.1918 453.696 84.99 453.902 84.7542 454.063Z" fill="white" />
    <path d="M110.179 478.657C109.824 478.899 109.404 479.031 108.974 479.036C108.544 479.04 108.122 478.917 107.762 478.681C107.402 478.446 107.12 478.109 106.951 477.713C106.783 477.318 106.735 476.881 106.815 476.458C106.894 476.035 107.098 475.646 107.399 475.338C107.7 475.031 108.085 474.82 108.507 474.732C108.928 474.644 109.365 474.683 109.764 474.843C110.164 475.004 110.506 475.28 110.748 475.635C111.073 476.111 111.196 476.697 111.089 477.264C110.982 477.83 110.655 478.331 110.179 478.657Z" fill="white" />
    <path d="M128.077 408.393L102.652 383.8L168.594 392.482L194.02 417.075L128.077 408.393Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="139" y="287" width="97" height="8" fill="#7154E7" />
    <rect x="139" y="305" width="92" height="8" fill="#494C67" />
    <rect x="139" y="343" width="110" height="8" fill="#494C67" />
    <rect x="259" y="343" width="22" height="8" fill="#7154E7" />
    <rect x="242" y="305" width="46" height="8" fill="#74CAAD" />
    <rect x="139" y="323" width="138" height="7" fill="#74CAAD" />
    <circle cx="335" cy="230" r="3" fill="#242945" />
    <path d="M475.2 434.465L475.191 434.479C474.404 436.884 473.38 439.098 472.152 441.047L472.143 441.061C456.502 469.973 435.329 441.903 435.329 441.903C435.329 441.903 429.671 409.793 403.157 438.965C376.643 468.137 359.582 413.984 359.582 413.984C359.053 410.912 358.415 407.885 357.671 404.914C350.292 374.559 372.184 364.306 365.059 339.691C357.935 315.077 356.26 273.593 383.145 260.323C408.036 248.038 438.869 263.331 448.14 288.626C454.919 307.134 458.341 338.013 457.285 362.858C456.693 376.634 458.097 381.498 461.466 393.651C461.37 393.383 461.547 393.943 461.466 393.651C466.158 406.743 469.518 402.141 474.254 415.954C476.607 422.819 476.765 429.664 475.2 434.465Z" fill="url(#paint4_linear_2585_9)" />
    <path d="M425.248 324.684L422.796 378.311L391.807 379.198L391.805 354.533L391.393 340.933L425.037 324.785L425.248 324.684Z" fill="#FBC3B3" />
    <path d="M423.172 329.575C422.073 334.04 415.796 354.341 391.888 357.11L391.5 344.522L423.172 329.575Z" fill="#F27764" />
    <path d="M429.148 303.718C429.159 311.72 429.824 319.413 424.259 325.174V332.313C424.259 332.313 409.187 350.481 392.324 350.481C375.461 350.481 370.832 321.439 370.832 304.611H370.85C370.832 304.317 370.832 304.022 370.832 303.718C370.832 286.605 383.315 275.059 400.455 275.059C417.595 275.059 429.148 286.605 429.148 303.718Z" fill="#FBC3B3" />
    <path d="M409.763 322.744C410.067 323.981 408.265 325.295 405.738 325.679C403.211 326.062 400.918 325.37 400.613 324.133C400.309 322.897 402.111 321.582 404.638 321.198C407.165 320.815 409.458 321.507 409.763 322.744Z" fill="#F4B3A1" />
    <path d="M383.01 322.338C383.251 323.319 381.824 324.36 379.822 324.664C377.819 324.967 376.002 324.419 375.761 323.439C375.52 322.459 376.948 321.417 378.95 321.113C380.952 320.81 382.769 321.358 383.01 322.338Z" fill="#F4B3A1" />
    <path d="M420.768 314.101C420.768 314.101 430.368 302.086 436.713 308.905C443.059 315.725 428.904 342.514 419.955 330.174C411.006 317.835 420.768 314.101 420.768 314.101Z" fill="#FBC3B3" />
    <path d="M424.424 322.556C424.424 322.556 428.155 307.508 434.573 311.819" stroke="#F27764" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M428.85 314.045C428.85 314.045 432.636 319.137 427.605 324.358" stroke="#F27764" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M391.917 307.958C391.917 307.958 393.711 320.351 383.18 321.811L389.69 327.848" stroke="#F27764" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M383.181 312.434C383.181 314.194 382.554 315.62 381.781 315.62C381.008 315.62 380.381 314.194 380.381 312.434C380.381 310.674 381.008 309.247 381.781 309.247C382.554 309.247 383.181 310.674 383.181 312.434Z" fill="#111746" />
    <path d="M404.431 312.434C404.431 314.194 403.804 315.62 403.031 315.62C402.258 315.62 401.631 314.194 401.631 312.434C401.631 310.674 402.258 309.247 403.031 309.247C403.804 309.247 404.431 310.674 404.431 312.434Z" fill="#111746" />
    <path d="M375.154 301.057C375.154 301.057 378.437 296.887 384.557 300.461" stroke="#111746" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M395.453 300.035C395.453 300.035 402.468 296.333 407.393 300.035" stroke="#111746" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M399.786 332.034C398.646 333.394 397.298 334.567 395.793 335.51C394.42 336.425 392.806 336.911 391.155 336.907C389.504 336.903 387.892 336.408 386.524 335.486C385.061 334.554 383.789 333.35 382.779 331.941L399.786 332.034Z" fill="white" />
    <path d="M395.794 335.51C394.421 336.425 392.807 336.911 391.156 336.907C389.505 336.903 387.893 336.408 386.525 335.486C389.537 334.496 392.788 334.504 395.794 335.51Z" fill="#E66454" />
    <path d="M384.443 292.05C375.013 292.902 373.071 291.748 366.885 290.5C372.393 282.517 383.291 266.096 400.884 267.354C418.476 268.611 430.669 282.683 432.309 289.177C422.977 296.047 394.331 293.763 387.869 292.353L386.778 285.157L384.443 292.05Z" fill="url(#paint5_linear_2585_9)" />
    <path d="M336.632 544.398L366.431 544.349C369.178 544.347 371.92 544.343 374.658 544.336C405.086 544.291 435.515 544.244 465.943 544.195C465.704 541.337 465.439 538.406 465.159 535.435C464.85 532.063 464.518 528.626 464.168 525.157C464.003 523.532 463.834 521.902 463.662 520.267C463.366 517.386 463.06 514.487 462.739 511.598C460.861 494.097 458.802 476.751 457.365 463.298C457.358 463.266 457.355 463.234 457.357 463.201C457.323 462.881 457.288 462.572 457.253 462.262C456.902 458.968 456.598 455.927 456.336 453.184C456.327 453.053 456.31 452.931 456.301 452.801C456.048 451.648 455.791 450.475 455.535 449.318C455.195 447.767 454.855 446.208 454.515 444.66C448.979 418.931 443.957 393.061 436.261 367.861C434.19 367.239 432.045 366.405 430.086 365.594C427.203 364.395 424.728 363.244 423.51 362.901C423.428 363.015 423.346 363.121 423.266 363.232C422.605 364.117 421.876 364.948 421.085 365.719C419.367 367.403 417.368 368.773 415.178 369.77C411.498 371.569 407.304 372.019 403.326 371.042C399.349 370.064 395.84 367.722 393.413 364.422C392.888 363.725 392.409 362.994 391.978 362.234C391.838 361.983 391.696 361.722 391.556 361.461C383.926 362.785 373.875 364.503 365.001 366.626C364.756 378.001 358.667 391.117 357.13 402.22C356.647 405.705 356.138 408.985 355.603 412.14L355.603 412.165C354.707 417.488 353.75 422.429 352.736 427.417C352.577 428.227 352.417 429.038 352.246 429.855C352.243 429.858 352.241 429.862 352.239 429.866C352.238 429.871 352.237 429.875 352.238 429.88C351.77 432.19 351.288 434.501 350.789 436.89C350.599 437.822 350.409 438.763 350.219 439.72L350.219 439.728C349.531 443.074 348.827 446.55 348.116 450.263C347.587 453.036 347.13 455.744 346.732 458.417C346.605 459.194 346.497 459.971 346.38 460.748C346.23 461.86 346.074 462.972 345.935 464.084C345.795 465.146 345.664 466.2 345.539 467.264C344.409 476.682 343.605 486.326 342.114 497.945C341.656 501.502 341.14 505.247 340.53 509.229C340.201 511.38 339.886 513.58 339.584 515.828C339.46 516.737 339.344 517.661 339.226 518.593C338.816 521.829 338.43 525.189 338.068 528.672C337.575 533.616 337.09 538.853 336.632 544.398Z" fill="#67C9A8" />
    <path d="M399.711 386.55C399.163 383.488 398.182 379.736 397.103 376.018C395.838 371.675 394.442 367.415 393.434 364.405C392.862 362.777 392.409 361.495 392.157 360.804L392.157 360.754L391.972 360.212C391.972 360.212 371.97 359.008 356.799 368.091C344.042 375.724 321.321 407.223 309.121 442.033C306.067 450.582 303.775 459.384 302.272 468.336C302.018 469.871 301.798 471.405 301.61 472.939L301.61 472.956C301.579 473.285 301.532 473.615 301.501 473.962C301.376 474.984 301.284 476.023 301.192 477.046C301.115 477.986 301.039 478.91 300.996 479.849C300.951 480.592 300.907 481.317 300.895 482.059C300.88 482.306 300.865 482.554 300.867 482.817C300.824 483.757 300.813 484.713 300.82 485.653C300.823 486.114 300.826 486.576 300.845 487.037C300.846 487.119 300.863 487.185 300.863 487.268C300.865 487.531 300.883 487.795 300.901 488.042C300.92 488.372 300.939 488.701 300.974 489.031C301.01 489.492 301.062 489.953 301.114 490.398C301.133 490.645 301.167 490.892 301.202 491.139C301.216 491.299 301.239 491.459 301.271 491.617C301.286 491.739 301.308 491.86 301.339 491.979C301.391 492.325 301.443 492.67 301.511 493.016C301.58 493.444 301.681 493.872 301.783 494.284C301.884 494.695 301.986 495.106 302.104 495.518C302.191 495.898 302.304 496.271 302.441 496.636C302.542 496.982 302.66 497.311 302.777 497.639C302.895 498.001 303.046 498.347 303.18 498.692C303.381 499.168 303.582 499.629 303.815 500.072C303.966 500.384 304.133 500.696 304.299 501.009C304.466 501.321 304.633 501.616 304.8 501.895C304.967 502.195 305.151 502.485 305.349 502.765C305.499 502.995 305.666 503.225 305.832 503.454C305.893 503.566 305.965 503.67 306.048 503.766C306.364 504.193 306.696 504.586 307.029 504.98C307.195 505.193 307.378 505.406 307.56 505.602C307.843 505.914 308.141 506.208 308.44 506.503C308.473 506.536 308.506 506.585 308.556 506.634C309.229 507.274 309.937 507.874 310.678 508.434C311.059 508.728 311.456 509.022 311.87 509.299C313.557 510.426 315.352 511.38 317.229 512.149L317.246 512.149C317.704 512.356 318.173 512.54 318.651 512.7C318.948 512.83 319.245 512.927 319.543 513.024C320.022 513.202 320.517 513.363 320.996 513.509C321.095 513.541 321.195 513.573 321.31 513.605C321.475 513.654 321.657 513.702 321.839 513.75C322.07 513.815 322.317 513.879 322.565 513.943C324.497 514.442 327.055 514.969 329.316 515.382C329.498 515.414 329.679 515.446 329.844 515.478C330.009 515.51 330.191 515.525 330.356 515.557C330.62 515.605 330.867 515.652 331.115 515.684C331.263 515.716 331.412 515.731 331.56 515.763C331.643 515.779 331.725 515.779 331.791 515.795C332.105 515.842 332.418 515.89 332.682 515.921C332.713 515.934 332.747 515.939 332.781 515.937L332.814 515.936C332.897 515.952 332.979 515.952 333.062 515.968C333.046 516.057 333.025 516.145 332.997 516.232C332.981 516.298 332.965 516.38 332.95 516.463C332.918 516.628 332.869 516.826 332.821 517.024C332.806 517.135 332.785 517.246 332.758 517.354C332.739 517.472 332.712 517.587 332.677 517.701C332.645 517.817 332.613 517.949 332.581 518.064C332.517 518.328 332.453 518.609 332.389 518.89C332.372 518.923 332.372 518.939 332.356 518.972C332.308 519.17 332.26 519.352 332.212 519.567C332.099 519.996 331.987 520.475 331.858 520.97C331.537 522.192 331.167 523.579 330.765 525.114L330.523 526.056C330.346 526.683 330.169 527.344 329.993 528.02C328.705 532.776 327.16 538.489 325.584 544.417L336.644 544.394L366.428 544.347L374.653 544.342C375.607 538.897 376.576 533.484 377.514 528.137C378.277 523.814 379.04 519.523 379.77 515.299C379.818 515.035 379.866 514.787 379.897 514.54C379.929 514.391 379.945 514.259 379.977 514.11C380.009 513.962 380.024 513.846 380.04 513.714C380.056 513.582 380.088 513.5 380.104 513.384C380.485 511.157 380.866 508.912 381.214 506.668C381.248 506.521 381.275 506.373 381.293 506.223C381.309 506.075 381.341 505.926 381.356 505.777C381.721 503.583 382.053 501.388 382.368 499.194L382.368 499.178C382.399 498.963 382.431 498.765 382.462 498.551C382.636 497.363 382.809 496.158 382.966 494.971C382.997 494.674 383.045 494.393 383.076 494.096C383.737 489.246 384.314 484.363 384.761 479.498L384.76 479.481C384.779 479.367 384.789 479.251 384.791 479.135C384.977 477.287 385.129 475.424 385.249 473.577C385.28 473.28 385.311 472.967 385.326 472.67C385.447 471.037 385.552 469.421 385.64 467.789C385.671 467.476 385.685 467.129 385.699 466.799C385.713 466.354 385.743 465.909 385.756 465.48C385.885 462.546 385.965 459.628 386.012 456.71C386.025 456.149 386.021 455.589 386.034 455.012C386.071 450.578 386.042 446.16 386.012 441.71C385.982 434.59 395.607 434.378 395.972 427.255C396.894 409.464 399.182 409.02 400.17 391.245C400.199 389.668 400.045 388.092 399.711 386.55Z" fill="url(#paint6_linear_2585_9)" />
    <path fillRule="evenodd" clipRule="evenodd" d="M380.265 512.425C380.591 510.513 380.913 508.591 381.211 506.669C381.246 506.522 381.272 506.373 381.291 506.223C381.298 506.149 381.31 506.075 381.322 506.001C381.334 505.926 381.346 505.852 381.354 505.778C381.718 503.583 382.05 501.389 382.365 499.194L382.365 499.193L366.971 499.301C366.586 498.716 366.053 498.243 365.427 497.93C364.801 497.617 364.102 497.475 363.404 497.519L323.134 498.313L303.218 498.705L303.189 498.706C303.341 499.071 303.499 499.429 303.664 499.779C303.712 499.878 303.762 499.975 303.813 500.072C303.963 500.385 304.13 500.697 304.297 501.009C304.464 501.321 304.631 501.617 304.797 501.896C304.833 501.959 304.869 502.023 304.906 502.085C305.001 502.241 305.098 502.394 305.195 502.545C305.245 502.619 305.295 502.693 305.347 502.766C305.496 502.994 305.661 503.223 305.827 503.451L305.83 503.455C305.858 503.507 305.89 503.559 305.923 503.608C305.945 503.637 305.966 503.666 305.987 503.695C306.006 503.72 306.026 503.743 306.046 503.767C306.362 504.193 306.694 504.586 307.026 504.98C307.193 505.193 307.375 505.406 307.558 505.603C307.84 505.914 308.139 506.209 308.437 506.504C308.452 506.518 308.467 506.536 308.484 506.556C308.487 506.561 308.491 506.565 308.495 506.569C308.765 506.832 309.041 507.087 309.322 507.335C309.76 507.717 310.211 508.084 310.675 508.434C311.056 508.728 311.454 509.022 311.868 509.3C313.554 510.426 315.35 511.38 317.227 512.149L317.243 512.149C317.702 512.357 318.171 512.541 318.648 512.7C318.946 512.83 319.243 512.927 319.54 513.024C320.019 513.202 320.515 513.364 320.994 513.509C321.093 513.541 321.192 513.573 321.308 513.606C321.31 513.606 321.312 513.607 321.314 513.608C322.668 513.97 324.029 514.303 325.397 514.606C326.688 514.884 328.047 515.151 329.314 515.383L329.315 515.383C329.496 515.415 329.677 515.446 329.842 515.478C329.856 515.481 329.869 515.483 329.883 515.486C329.89 515.487 329.896 515.488 329.902 515.489C329.966 515.5 330.032 515.509 330.098 515.518C330.184 515.529 330.271 515.541 330.353 515.557C330.396 515.565 330.437 515.573 330.479 515.58C330.697 515.62 330.905 515.658 331.112 515.684C331.151 515.693 331.19 515.7 331.229 515.707C331.694 515.779 332.16 515.849 332.626 515.915C332.644 515.917 332.662 515.919 332.68 515.921C332.681 515.922 332.683 515.922 332.684 515.923C332.717 515.928 332.751 515.932 332.785 515.937L332.812 515.937C332.853 515.945 332.894 515.949 332.935 515.952C332.977 515.956 333.018 515.96 333.059 515.968C333.059 515.97 333.058 515.973 333.058 515.975C333.059 515.975 333.06 515.975 333.061 515.975C333.048 516.055 333.03 516.143 333.008 516.238C332.945 516.554 332.855 516.955 332.741 517.433C332.726 517.511 332.708 517.588 332.686 517.665C332.606 517.997 332.516 518.362 332.416 518.758C332.406 518.801 332.397 518.844 332.387 518.887L332.386 518.89C332.383 518.896 332.381 518.902 332.379 518.907C332.375 518.92 332.372 518.934 332.368 518.948C332.366 518.959 332.363 518.971 332.36 518.983C332.337 519.073 332.314 519.165 332.291 519.259C332.266 519.36 332.24 519.464 332.212 519.571C332.205 519.601 332.194 519.638 332.18 519.68C332.133 519.863 332.085 520.055 332.037 520.252C331.979 520.485 331.919 520.726 331.856 520.97C331.731 521.444 331.599 521.942 331.461 522.465C331.243 523.29 331.008 524.174 330.762 525.115L330.521 526.056C330.344 526.683 330.167 527.344 329.99 528.021C328.703 532.776 327.158 538.49 325.581 544.418L336.641 544.394L366.426 544.347L368.028 544.346C368.872 542.793 369.77 541.083 370.668 539.375C373.594 533.81 376.512 528.258 377.51 528.143C377.511 528.142 377.511 528.14 377.511 528.138C377.684 527.159 377.857 526.181 378.029 525.206C378.136 524.602 378.243 523.999 378.349 523.396C378.821 520.706 379.289 518.035 379.753 515.383C379.758 515.355 379.763 515.327 379.768 515.299C379.77 515.287 379.772 515.274 379.775 515.262C379.807 515.079 379.838 514.903 379.868 514.728C379.878 514.665 379.887 514.603 379.895 514.54C379.911 514.466 379.923 514.395 379.934 514.325C379.946 514.255 379.958 514.185 379.974 514.111C379.975 514.107 379.976 514.103 379.977 514.099C379.992 514.011 380.007 513.924 380.022 513.836C380.028 513.796 380.033 513.756 380.038 513.715C380.046 513.644 380.059 513.587 380.072 513.532C380.076 513.516 380.08 513.5 380.083 513.483C380.144 513.131 380.205 512.778 380.265 512.425Z" fill="#6D3EF6" />
    <path d="M366.436 544.35C369.183 544.348 371.925 544.344 374.663 544.337C405.091 544.292 435.52 544.245 465.948 544.196C467.32 544.195 468.701 544.195 470.069 544.186C469.697 541.206 469.335 538.283 468.973 535.457C468.802 534.084 468.628 532.738 468.452 531.417C468.374 530.758 468.289 530.111 468.202 529.465C468.15 529.049 468.099 528.634 468.039 528.217C467.987 527.833 467.943 527.449 467.893 527.074C467.843 526.698 467.797 526.323 467.746 525.956C467.506 524.062 467.265 522.258 467.041 520.585C467.032 520.488 467.023 520.389 467.006 520.292C467.545 520.214 468.091 520.13 468.653 520.044C468.735 520.035 468.818 520.018 468.915 520.001C469.552 519.908 470.196 519.796 470.848 519.687C471.5 519.577 472.153 519.449 472.807 519.323C472.815 519.331 472.823 519.323 472.832 519.323C473.255 519.246 473.671 519.162 474.096 519.077C474.521 518.992 474.944 518.906 475.377 518.808C475.809 518.71 476.29 518.606 476.748 518.496L477.077 518.419C477.541 518.311 477.998 518.202 478.454 518.081L479.14 517.911C479.366 517.856 479.585 517.786 479.808 517.727L479.953 517.687C480.447 517.557 480.932 517.428 481.414 517.285C481.798 517.175 482.181 517.059 482.556 516.948C483.234 516.739 483.901 516.515 484.569 516.29C484.789 516.215 485.01 516.141 485.238 516.057C485.678 515.899 486.11 515.733 486.554 515.567C486.83 515.466 487.108 515.359 487.376 515.242C487.751 515.092 488.117 514.943 488.484 514.786C488.908 514.603 489.332 514.421 489.746 514.222C490.16 514.023 490.545 513.849 490.936 513.659C492.551 512.865 494.106 511.957 495.591 510.94C495.778 510.817 495.957 510.694 496.127 510.561C496.656 510.19 497.176 509.794 497.671 509.383C497.835 509.242 497.999 509.111 498.162 508.971C498.49 508.691 498.803 508.403 499.111 508.115C499.419 507.826 499.721 507.532 500.014 507.227L500.086 507.154C500.354 506.874 500.613 506.587 500.865 506.29C500.986 506.143 501.116 505.995 501.237 505.847C501.651 505.35 502.038 504.829 502.404 504.295C502.492 504.173 502.567 504.057 502.646 503.934C502.783 503.721 502.913 503.516 503.042 503.302C503.171 503.089 503.301 502.869 503.422 502.655C503.543 502.442 503.665 502.212 503.777 501.994C503.889 501.775 504.003 501.544 504.102 501.314C504.265 500.962 504.427 500.61 504.57 500.241C504.633 500.086 504.69 499.937 504.746 499.782C504.997 499.117 505.213 498.439 505.392 497.752C505.433 497.597 505.473 497.45 505.505 497.303C505.616 496.835 505.718 496.362 505.797 495.878C505.829 495.725 505.852 495.569 505.867 495.413C505.922 495.083 505.961 494.753 506 494.423C506.024 494.219 506.039 494.014 506.052 493.801C506.068 493.646 506.075 493.491 506.082 493.336C506.135 492.576 506.146 491.791 506.124 490.984C506.113 490.501 506.093 490.02 506.074 489.539C506.054 489.058 506.034 488.566 506.015 488.084C505.968 486.998 505.911 485.904 505.847 484.826C505.792 483.978 505.738 483.127 505.675 482.279C505.674 482.219 505.668 482.159 505.657 482.099C505.629 481.594 505.586 481.094 505.542 480.597C505.479 479.715 505.399 478.832 505.312 477.951C505.172 476.515 505.023 475.078 504.859 473.657C499.617 428.396 481.076 387.191 468.509 379.268C457.336 372.347 445.239 367.043 432.578 363.515C426.996 361.951 423.521 361.353 423.521 361.353C423.521 361.353 423.48 361.394 423.398 361.467C423.017 361.837 421.726 363.112 419.795 365.069C418.522 366.36 416.963 367.948 415.203 369.772C412.583 372.476 409.532 375.707 406.262 379.282C404.146 381.582 401.948 384.031 399.727 386.578C387.111 400.973 373.761 418.289 371.555 429.225C375.037 437.79 377.492 446.737 378.869 455.879C378.938 456.401 378.998 456.932 379.044 457.462C379.079 457.792 379.115 458.141 379.141 458.475C379.211 459.251 379.265 460.027 379.295 460.802C379.296 460.925 379.313 461.039 379.314 461.161C379.243 461.642 379.042 462.095 378.734 462.472C376.898 465.245 371.125 470.74 368.225 474.321C367.413 475.128 366.827 476.135 366.528 477.24C366.986 488.543 374.817 476.663 377.127 484.767C377.489 486.204 377.688 487.677 377.718 489.158C377.714 490.145 377.525 491.122 377.158 492.038C376.177 494.551 374.976 496.972 373.569 499.274C371.405 503.022 368.916 506.991 367.368 510.318L367.368 510.304C366.772 511.503 366.32 512.767 366.021 514.071C365.927 514.517 365.886 514.973 365.898 515.429C366.093 519.888 366.228 524.403 366.317 528.904C366.41 534.091 366.444 539.27 366.436 544.35Z" fill="url(#paint7_linear_2585_9)" />
    <path d="M488.561 469.74C480.236 466.48 471.406 464.701 462.468 464.485C462.367 463.696 462.394 462.896 462.55 462.116C462.769 460.815 462.834 459.493 462.743 458.177C472.125 460.283 481.73 462.976 488.561 469.74Z" fill="#6D3EF6" />
    <path d="M458.319 403.642C458.09 408.64 457.496 413.809 457.265 418.814L456.976 424.952C456.543 434.385 456.11 443.824 455.165 453.221L461.991 453.011C458.82 436.803 460.126 420.059 458.319 403.642Z" fill="#6D3EF6" />
    <path d="M355.711 404.421C355.529 409.422 355.699 414.623 355.517 419.623L355.296 425.765C354.952 435.202 354.61 444.646 354.782 454.088L347.996 453.323C352.492 437.43 352.564 420.637 355.711 404.421Z" fill="#6D3EF6" />
    <path fillRule="evenodd" clipRule="evenodd" d="M421.573 544.266C436.365 544.243 451.156 544.22 465.947 544.196C467.319 544.195 468.7 544.195 470.068 544.186C469.986 543.526 469.904 542.868 469.822 542.214C469.536 539.916 469.254 537.657 468.972 535.457C468.801 534.084 468.627 532.738 468.451 531.417C468.373 530.758 468.288 530.111 468.201 529.465C468.194 529.411 468.188 529.356 468.181 529.302C468.136 528.94 468.091 528.579 468.038 528.217C468.011 528.017 467.986 527.817 467.961 527.618C467.939 527.435 467.916 527.254 467.892 527.074C467.872 526.926 467.853 526.778 467.834 526.631C467.805 526.404 467.776 526.179 467.745 525.956C467.505 524.062 467.264 522.258 467.04 520.585L467.04 520.578C467.031 520.483 467.022 520.387 467.005 520.292C467.498 520.221 467.997 520.144 468.509 520.066C468.556 520.059 468.604 520.051 468.652 520.044C468.714 520.037 468.777 520.026 468.846 520.013C468.868 520.009 468.89 520.005 468.914 520.001C469.457 519.922 470.005 519.829 470.558 519.735C470.654 519.719 470.751 519.703 470.847 519.687C471.443 519.586 472.041 519.471 472.638 519.355C472.694 519.344 472.75 519.334 472.806 519.323C472.812 519.328 472.817 519.326 472.823 519.324C472.825 519.323 472.828 519.323 472.831 519.323C473.254 519.246 473.67 519.162 474.095 519.077C474.169 519.062 474.243 519.047 474.317 519.032C477.114 518.443 479.886 517.735 482.626 516.911C472.67 514.314 462.731 511.654 452.842 508.808C444.75 506.48 436.658 504.095 428.657 501.494C424.773 500.232 420.915 498.881 417.132 497.345C416.326 497.02 415.526 496.696 414.734 496.353C414.766 497.093 414.797 497.834 414.828 498.578C414.964 501.774 415.101 505.01 415.241 508.276C415.029 518.56 418.48 532.111 420.98 541.932C421.185 542.737 421.384 543.516 421.573 544.266Z" fill="#6D3EF6" />
    <path d="M315.515 469.593C322.18 466.292 329.091 463.515 336.187 461.287C339.733 460.172 343.318 459.196 346.942 458.358C348.79 457.93 350.646 457.54 352.509 457.187C354.22 456.865 355.832 456.94 357.558 456.693C358.523 456.581 359.496 456.549 360.467 456.598C369.004 456.791 377.839 457.051 385.548 460.729C377.797 462.797 369.959 464.497 362.035 465.828C354.297 467.131 346.385 467.055 338.567 467.657C334.105 467.963 329.664 468.533 325.268 469.364C322.067 470.103 318.748 470.181 315.515 469.593Z" fill="#6D3EF6" />
    <path d="M364.954 473.142C365.708 473.096 366.464 473.186 367.186 473.407C368.025 474.067 368.785 474.823 369.449 475.659C371.327 477.529 373.255 479.352 375.12 481.239C375.636 481.76 376.139 482.289 376.643 482.818C380.887 477.948 385.072 473.028 389.197 468.057C384.624 464.626 381.13 462.048 379.557 460.96L377.276 459.383C377.1 457.283 376.724 455.205 376.154 453.176C375.274 450.825 374.274 448.521 373.158 446.273C371.524 442.163 370.706 437.677 369.363 433.441C369.034 432.094 368.401 430.84 367.511 429.776C367.478 429.74 367.44 429.706 367.405 429.671C366.946 429.185 366.346 428.856 365.69 428.727C365.034 428.599 364.354 428.679 363.746 428.957C363.318 429.246 362.962 429.63 362.705 430.078C362.448 430.526 362.297 431.027 362.263 431.543C362.168 433.401 362.36 435.263 362.833 437.063C363.15 438.202 363.352 439.37 363.437 440.55C363.448 442.317 362.323 441.205 361.494 440.363C360.6 439.428 359.782 438.422 359.049 437.356C357.582 435.261 356.352 433.012 354.971 430.859C354.971 430.859 345.614 416.291 345.597 416.273C345.345 415.946 345.021 415.68 344.65 415.497C344.279 415.314 343.871 415.219 343.457 415.218C343.044 415.217 342.635 415.31 342.264 415.491C341.892 415.672 341.566 415.936 341.312 416.262C339.986 418.171 342.164 420.491 343.025 422.111C344.466 424.817 345.895 427.53 347.314 430.248C348.327 432.199 349.336 434.153 350.341 436.111C350.926 437.246 351.962 438.212 352.578 439.373C352.805 439.804 353.525 440.953 353.025 441.439C352.525 441.925 351.703 440.953 351.337 440.647C350.424 439.895 349.54 439.108 348.666 438.306C346.986 436.753 345.367 435.128 343.762 433.492C340.561 430.09 337.16 426.882 333.577 423.885C333.432 423.768 333.277 423.665 333.113 423.575C332.842 423.344 332.528 423.171 332.188 423.065C331.849 422.959 331.491 422.923 331.137 422.959C330.783 422.995 330.44 423.102 330.129 423.274C329.817 423.446 329.544 423.679 329.325 423.959C327.712 426.185 330.817 428.634 332.123 430.138C334.237 432.554 336.44 434.89 338.559 437.308C340.14 439.108 341.722 440.911 343.307 442.716C343.861 443.344 347.069 445.668 346.289 446.756C345.608 447.71 343.295 445.483 342.7 445.144C341.276 444.333 339.857 443.508 338.442 442.669C335.613 440.995 332.828 439.251 330.089 437.436C329.849 437.274 329.584 437.153 329.305 437.076C328.55 436.534 327.793 435.989 327.04 435.433C326.711 435.212 326.336 435.071 325.943 435.022C325.55 434.973 325.151 435.017 324.778 435.15C324.405 435.283 324.069 435.502 323.797 435.79C323.524 436.077 323.323 436.424 323.21 436.803C322.541 439.115 325.341 440.383 326.843 441.466C329.237 443.186 331.649 444.88 334.078 446.548C335.794 447.729 337.518 448.895 339.252 450.048C340.174 450.661 344.424 453.032 342.505 454.439C342.129 454.713 341.203 454.385 340.818 454.285C339.61 453.923 338.428 453.481 337.279 452.963C334.13 451.752 330.964 450.587 327.781 449.467C327.367 449.334 326.926 449.309 326.5 449.393C326.073 449.476 325.675 449.667 325.342 449.947C325.009 450.226 324.752 450.586 324.595 450.991C324.439 451.397 324.388 451.836 324.447 452.266C324.87 454.96 329.621 455.555 331.678 456.254C334.956 457.366 338.189 458.598 341.374 459.948C341.927 460.161 342.452 460.438 342.939 460.774C343.523 461.266 344.046 461.827 344.496 462.445C349.149 467.818 355.485 471.456 362.471 472.766C363.283 472.928 364.12 473.056 364.954 473.142Z" fill="#FFCFCA" />
    <path d="M467.012 520.296C467.025 520.393 467.036 520.487 467.05 520.584C462.993 520.271 458.96 519.697 454.976 518.865C444.445 516.832 434.029 514.242 423.772 511.104C423.533 511.029 423.292 510.942 423.047 510.873C420.438 510.036 417.838 509.17 415.247 508.275C412.934 507.477 410.637 506.655 408.357 505.81C395.889 501.272 383.797 495.758 372.196 489.32C369.742 487.942 367.315 486.512 364.915 485.031C363.917 484.52 363.05 483.786 362.382 482.886C361.713 481.986 361.261 480.944 361.06 479.841C360.889 478.248 360.942 476.638 361.22 475.06C361.59 472.075 361.969 469.087 362.356 466.094C362.448 464.909 362.704 463.743 363.115 462.628C363.404 461.933 363.852 461.316 364.421 460.824C365.078 460.283 365.854 459.908 366.686 459.73C381.882 456.048 397.545 455.665 413.121 456.788C414.77 456.905 416.419 457.04 418.068 457.19C420.504 457.41 422.927 457.664 425.345 457.939C428.161 458.25 430.971 458.612 433.759 458.989L438.663 459.65C445.008 460.51 451.377 461.379 457.737 462.336C465.581 463.508 473.412 464.793 481.141 466.312C489.038 467.851 497.469 469.816 504.652 473.55C504.718 473.584 504.781 473.62 504.847 473.651C505.511 479.36 505.945 485.151 506.115 490.978C506.696 511.408 484.523 517.776 467.012 520.296Z" fill="url(#paint8_linear_2585_9)" />
    <path d="M457.742 462.331C457.474 463.16 457.086 463.945 456.589 464.66C449.483 475.191 439.469 483.378 429.434 491.17C424.616 494.912 419.748 498.596 414.643 501.94C412.603 503.272 410.507 504.579 408.351 505.81C395.885 501.272 383.795 495.758 372.196 489.32C374.668 486.673 377.428 484.311 380.426 482.277C389.816 475.743 400.585 471.495 411.359 467.643C420.252 464.306 429.38 461.632 438.669 459.645C445.014 460.51 451.382 461.379 457.742 462.331Z" fill="#6D3EF6" />
    <path d="M473.034 458.313C469.48 453.805 464.918 449.007 459.628 446.405C456.459 444.816 452.934 444.074 449.394 444.252C443.15 444.293 437.581 449.353 432.082 452.112C433.911 454.535 435.748 456.895 437.582 459.319C439.378 461.687 441.344 464.185 444.258 465.209C446.608 466.029 448.424 464.806 450.858 464.234C454.777 463.267 458.826 462.941 462.848 463.267C477.071 465.396 476.162 462.283 473.034 458.313Z" fill="#FFCFCA" />
    <path d="M448.193 466.028C447.371 476.253 401.074 499.593 381.971 505.992C381.74 506.069 381.513 506.145 381.283 506.218C371.595 509.322 361.748 511.91 351.785 513.97C331.686 518.33 323.85 514.397 320.991 513.513C313.681 511.253 306.697 507.16 303.181 498.696C301.551 494.544 300.748 490.114 300.816 485.654C300.816 481.742 301.041 477.833 301.489 473.946C301.528 473.617 301.566 473.275 301.608 472.942C302.429 472.501 303.264 472.056 304.11 471.607C310.87 467.976 318.845 466.01 326.315 464.449C341.1 461.354 356.227 459.143 371.157 456.917C373.803 456.522 376.46 456.155 379.129 455.817C381.42 455.526 383.716 455.254 386.021 455.016C402.315 453.319 429.417 447.934 436.103 451.001C436.1 451.007 448.487 462.377 448.193 466.028Z" fill="url(#paint9_linear_2585_9)" />
    <rect x="40" y="539" width="590" height="23" rx="1" fill="url(#paint10_linear_2585_9)" />
    <defs>
      <linearGradient id="paint0_linear_2585_9" x1="87.0654" y1="631.183" x2="421.386" y2="-138.179" gradientUnits="userSpaceOnUse">
        <stop stopColor="#886DF5" />
        <stop offset="1" stopColor="#9C85FB" />
      </linearGradient>
      <linearGradient id="paint1_linear_2585_9" x1="330.872" y1="611.576" x2="334.331" y2="109.339" gradientUnits="userSpaceOnUse">
        <stop stopColor="#8078B6" />
        <stop offset="1" stopColor="#FFFCEC" />
      </linearGradient>
      <linearGradient id="paint2_linear_2585_9" x1="331.272" y1="539" x2="332.843" y2="241.008" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2B2454" />
        <stop offset="1" stopColor="#232A43" />
      </linearGradient>
      <radialGradient id="paint3_radial_2585_9" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(122.989 417.128) rotate(59.7036) scale(39.0287 32.5581)">
        <stop stopColor="#C785FB" />
        <stop offset="1" stopColor="#6F52E7" />
      </radialGradient>
      <linearGradient id="paint4_linear_2585_9" x1="356.129" y1="356.628" x2="476.226" y2="356.628" gradientUnits="userSpaceOnUse">
        <stop stopColor="#31366F" />
        <stop offset="1" stopColor="#452C81" />
      </linearGradient>
      <linearGradient id="paint5_linear_2585_9" x1="379.696" y1="277.99" x2="429.03" y2="291.473" gradientUnits="userSpaceOnUse">
        <stop stopColor="#333570" />
        <stop offset="1" stopColor="#402E7C" />
      </linearGradient>
      <linearGradient id="paint6_linear_2585_9" x1="-1381.93" y1="524.206" x2="-1384.76" y2="401.646" gradientUnits="userSpaceOnUse">
        <stop stopColor="#8B6AFB" />
        <stop offset="1" stopColor="#A692FF" />
      </linearGradient>
      <linearGradient id="paint7_linear_2585_9" x1="-1467.44" y1="525.216" x2="-1469.2" y2="402.711" gradientUnits="userSpaceOnUse">
        <stop stopColor="#8B6AFB" />
        <stop offset="1" stopColor="#A692FF" />
      </linearGradient>
      <linearGradient id="paint8_linear_2585_9" x1="-1537.77" y1="501.336" x2="-1392.7" y2="500.384" gradientUnits="userSpaceOnUse">
        <stop stopColor="#8B6AFB" />
        <stop offset="1" stopColor="#A692FF" />
      </linearGradient>
      <linearGradient id="paint9_linear_2585_9" x1="-1480.43" y1="495.253" x2="-1332.92" y2="494.285" gradientUnits="userSpaceOnUse">
        <stop stopColor="#8B6AFB" />
        <stop offset="1" stopColor="#A692FF" />
      </linearGradient>
      <linearGradient id="paint10_linear_2585_9" x1="40" y1="550" x2="630" y2="550" gradientUnits="userSpaceOnUse">
        <stop stopColor="#8078B6" />
        <stop offset="1" stopColor="#A59FC6" />
      </linearGradient>
    </defs>
  </svg>


}