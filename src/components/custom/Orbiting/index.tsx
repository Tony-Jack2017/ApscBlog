import OrbitingCircles from "@/components/ui/orbiting-circles";

import AvatarImg from "@/assets/img/common/avatar/avatar_4.jpg";

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">

      <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-primary-foreground">
        <img src={AvatarImg} alt="avatar" className="w-full h-full"/>
      </div>


      {/* Inside */}
      {
        Object.keys(icons.inside).map((item, index) => {
          const Icon = icons.inside[item as keyof typeof icons.inside];
          return (
            <OrbitingCircles
              key={index}
              className="size-[30px] border-none bg-transparent"
              radius={100}
              duration={10}
              delay={10 * (index / Object.keys(icons.inside).length)}
              reverse
            >
              <Icon />
            </OrbitingCircles>
          )
        })
      }

      {/* Middle */}
      {
        Object.keys(icons.middle).map((item, index) => {
          const Icon = icons.middle[item as keyof typeof icons.middle];
          return (
            <OrbitingCircles
              key={index}
              className="size-[40px] border-none bg-transparent"
              radius={160}
              duration={20}
              delay={20 * (index / Object.keys(icons.middle).length)}
              reverse
            >
              <Icon />
            </OrbitingCircles>
          )
        })
      }
      {/* Outer Circles (reverse) */}
      {
        Object.keys(icons.outline).map((item, index) => {
          const Icon = icons.outline[item as keyof typeof icons.outline];
          return (
            <OrbitingCircles
              key={index}
              className="size-[50px] border-none bg-transparent"
              radius={240}
              duration={30}
              delay={30 * (index / Object.keys(icons.outline).length)}
              reverse
            >
              <Icon />
            </OrbitingCircles>
          )
        })
      }
    </div>
  );
}

const icons = {

  /* Inside */
  inside: {
    red: () => (
      <svg width="100" height="76" viewBox="0 0 100 76" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M66.7034 43.5983C73.2755 43.5983 82.7843 42.2429 82.7843 34.4257C82.804 33.8224 82.7493 33.219 82.6215 32.629L78.7076 15.6287C77.804 11.8883 77.0108 10.1914 70.4439 6.90796C65.348 4.30223 54.2474 -0.000366211 50.964 -0.000366211C47.9065 -0.000366211 47.0186 3.93974 43.3727 3.93974C39.8634 3.93974 37.2577 0.997795 33.9743 0.997795C30.8222 0.997795 28.7681 3.14647 27.1815 7.56465C27.1815 7.56465 22.7633 20.0259 22.196 21.8331C22.1058 22.165 22.0668 22.5086 22.0804 22.8523C22.0804 27.696 41.1505 43.5773 66.7034 43.5773M83.793 37.5988C84.7019 41.9014 84.7019 42.3532 84.7019 42.9206C84.7019 50.2754 76.4329 54.3574 65.5634 54.3574C40.9982 54.3732 19.4799 39.9786 19.4799 30.4646C19.4785 29.1403 19.7485 27.8297 20.2732 26.6138C11.4368 27.0551 0 28.6311 0 38.7283C0 55.2663 39.1857 75.6498 70.2128 75.6498C94.0005 75.6498 100 64.8906 100 56.3958C100 49.7133 94.2212 42.1273 83.8035 37.5988" fill="#EE0000"/>
        <path d="M83.793 37.5988C84.7019 41.9014 84.7019 42.3532 84.7019 42.9206C84.7019 50.2755 76.4329 54.3574 65.5634 54.3574C40.9982 54.3732 19.4799 39.9786 19.4799 30.4646C19.4785 29.1403 19.7485 27.8297 20.2732 26.6138L22.196 21.8541C22.1079 22.1792 22.0689 22.5157 22.0804 22.8523C22.0804 27.696 41.1505 43.5773 66.7035 43.5773C73.2756 43.5773 82.7844 42.2219 82.7844 34.4047C82.804 33.8014 82.7493 33.1979 82.6215 32.608L83.793 37.5988Z" fill="black"/>
      </svg>
    ),
    cl: () => (
      <svg width="89" height="100" viewBox="0 0 89 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M88.7304 29.3213C88.7297 27.6444 88.371 26.1626 87.6458 24.8908C86.9333 23.6402 85.8664 22.5921 84.4353 21.7633C72.6222 14.9519 60.7977 8.16125 48.9885 1.34284C45.8048 -0.495164 42.7179 -0.428157 39.5578 1.43624C34.8559 4.20922 11.3148 17.6964 4.29992 21.7595C1.41097 23.4319 0.00520781 25.9914 0.00451344 29.3181C0 43.0164 0.00451344 56.7143 0 70.4129C0.000694375 72.0531 0.344063 73.506 1.0374 74.7587C1.75017 76.0471 2.83201 77.1241 4.2961 77.9715C11.3114 82.0347 34.8555 95.5208 39.5565 98.2945C42.7179 100.16 45.8048 100.227 48.9895 98.3879C60.7991 91.5691 72.6243 84.7789 84.4391 77.9674C85.9032 77.1202 86.985 76.0426 87.6978 74.7552C88.3901 73.5026 88.7342 72.0496 88.7349 70.4091C88.7349 70.4091 88.7349 43.0199 88.7304 29.3213Z" fill="#5C8DBC"/>
        <path d="M44.5032 49.7322L1.03735 74.7588C1.75013 76.0473 2.83197 77.1242 4.29606 77.9717C11.3113 82.0349 34.8555 95.521 39.5565 98.2947C42.7179 100.16 45.8048 100.227 48.9895 98.3881C60.7991 91.5693 72.6244 84.779 84.4392 77.9676C85.9033 77.1204 86.9851 76.0427 87.6979 74.7554L44.5032 49.7322Z" fill="#1A4674"/>
        <path d="M31.629 57.1453C34.1583 61.5608 38.913 64.5389 44.3673 64.5389C49.8553 64.5389 54.6371 61.5229 57.1536 57.0602L44.5031 49.7322L31.629 57.1453Z" fill="#1A4674"/>
        <path d="M88.7303 29.3216C88.7296 27.6447 88.371 26.1629 87.6457 24.8911L44.5032 49.7324L87.6978 74.7556C88.3901 73.503 88.7342 72.05 88.7349 70.4095C88.7349 70.4095 88.7349 43.0202 88.7303 29.3216Z" fill="#1B598E"/>
        <path d="M86.3551 51.5208H82.9798V54.8969H79.6037V51.5208H76.2287V48.1459H79.6037V44.7705H82.9798V48.1459H86.3551V51.5208ZM74.0387 51.5208H70.6637V54.8969H67.2883V51.5208H63.913V48.1459H67.2883V44.7705H70.6637V48.1459H74.0387V51.5208Z" fill="white"/>
        <path d="M57.1537 57.0604C54.6373 61.5231 49.8554 64.5392 44.3675 64.5392C38.9131 64.5392 34.1584 61.561 31.6291 57.1455C30.3586 54.9298 29.6913 52.4197 29.6939 49.8656C29.6939 41.7619 36.2637 35.1924 44.3675 35.1924C49.7867 35.1924 54.5164 38.1335 57.0582 42.5039L69.8837 35.1185C64.7859 26.3187 55.2685 20.3984 44.3675 20.3984C28.0927 20.3984 14.8999 33.5916 14.8999 49.8656C14.8999 55.2047 16.3202 60.2115 18.8026 64.5301C23.8875 73.3765 33.4321 79.3332 44.3675 79.3332C55.323 79.3332 64.8824 73.3525 69.96 64.4801L57.1537 57.0604Z" fill="white"/>
      </svg>
    ),
    flutter: () => (
      <svg width="81" height="100" viewBox="0 0 81 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.3989 65.3954L0 49.9964L50 0.000488281H80.7938L15.3989 65.3954ZM80.7938 46.1366H50L38.465 57.6717L53.8639 73.0706" fill="#42A5F5" fill-opacity="0.8"/>
        <path d="M38.4651 88.4654L50.0001 100H80.794L53.864 73.0706" fill="#0D47A1"/>
        <path d="M23.1025 73.0787L38.4772 57.7L53.8519 73.0746L38.4772 88.4533L23.1025 73.0787Z" fill="#42A5F5"/>
        <path d="M38.4771 88.4533L53.8517 73.0786L55.9979 75.2248L40.6232 90.5994L38.4771 88.4533Z" fill="url(#paint0_linear_790_791)"/>
        <path d="M38.4651 88.4653L61.3129 80.5719L53.864 73.0664" fill="url(#paint1_linear_790_791)"/>
        <defs>
          <linearGradient id="paint0_linear_790_791" x1="46.1673" y1="80.7631" x2="48.3136" y2="82.9094" gradientUnits="userSpaceOnUse">
            <stop offset="0.2" stop-opacity="0.15"/>
            <stop offset="0.85" stop-color="#616161" stop-opacity="0.01"/>
          </linearGradient>
          <linearGradient id="paint1_linear_790_791" x1="38.4705" y1="80.7663" x2="61.318" y2="80.7663" gradientUnits="userSpaceOnUse">
            <stop offset="0.2" stop-opacity="0.55"/>
            <stop offset="0.85" stop-color="#616161" stop-opacity="0.01"/>
          </linearGradient>
        </defs>
      </svg>
    )
  },

  /* Middle */
  middle: {
    react: () => (
      <svg width="101" height="100" viewBox="0 0 101 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50.3067 58.8168C55.1757 58.8168 59.1229 54.8697 59.1229 50.0006C59.1229 45.1315 55.1757 41.1844 50.3067 41.1844C45.4376 41.1844 41.4904 45.1315 41.4904 50.0006C41.4904 54.8697 45.4376 58.8168 50.3067 58.8168Z" fill="#61DAFB"/>
        <path d="M50.3066 68.0631C76.4333 68.0631 97.6132 59.9762 97.6132 50.0005C97.6132 40.0249 76.4333 31.938 50.3066 31.938C24.1799 31.938 3 40.0249 3 50.0005C3 59.9762 24.1799 68.0631 50.3066 68.0631Z" stroke="#61DAFB" stroke-width="5"/>
        <path d="M34.664 59.0318C47.7274 81.6582 65.3207 95.9571 73.9599 90.9692C82.5991 85.9814 79.0126 63.5957 65.9492 40.9693C52.8858 18.3428 35.2925 4.04395 26.6533 9.03178C18.0141 14.0196 21.6006 36.4054 34.664 59.0318Z" stroke="#61DAFB" stroke-width="5"/>
        <path d="M34.664 40.9692C21.6007 63.5956 18.0141 85.9814 26.6533 90.9692C35.2925 95.957 52.8859 81.6582 65.9492 59.0318C79.0126 36.4053 82.5991 14.0196 73.9599 9.03176C65.3208 4.04393 47.7274 18.3428 34.664 40.9692Z" stroke="#61DAFB" stroke-width="5"/>
      </svg>
    ),
    golang: () => (
      <svg width="100" height="38" viewBox="0 0 100 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.54671 11.3129C7.35195 11.3129 7.30326 11.2155 7.40064 11.0695L8.4231 9.75489C8.52048 9.60882 8.76392 9.51144 8.95867 9.51144H26.3404C26.5352 9.51144 26.5839 9.65751 26.4865 9.80357L25.6588 11.0695C25.5614 11.2155 25.318 11.3616 25.1719 11.3616L7.54671 11.3129ZM0.194754 15.7923C0 15.7923 -0.0486884 15.6949 0.0486884 15.5488L1.07115 14.2342C1.16852 14.0882 1.41196 13.9908 1.60672 13.9908H23.8086C24.0034 13.9908 24.1008 14.1368 24.0521 14.2829L23.6626 15.4514C23.6139 15.6462 23.4191 15.7436 23.2244 15.7436L0.194754 15.7923ZM11.9774 20.2716C11.7826 20.2716 11.7339 20.1255 11.8313 19.9795L12.5129 18.7622C12.6103 18.6162 12.8051 18.4701 12.9998 18.4701H22.7375C22.9323 18.4701 23.0296 18.6162 23.0296 18.8109L22.9323 19.9795C22.9323 20.1742 22.7375 20.3203 22.5914 20.3203L11.9774 20.2716ZM62.5159 10.4365C59.4486 11.2155 57.355 11.7998 54.3363 12.5788C53.606 12.7736 53.5573 12.8223 52.9243 12.0919C52.194 11.2642 51.6584 10.7287 50.636 10.2418C47.5686 8.73243 44.5986 9.17062 41.8234 10.9721C38.5126 13.1144 36.8085 16.2791 36.8571 20.2229C36.9058 24.118 39.5837 27.3314 43.4301 27.867C46.7409 28.3052 49.5161 27.1367 51.7071 24.6535C52.1453 24.118 52.5348 23.5337 53.0217 22.8521H43.6248C42.6024 22.8521 42.3589 22.2191 42.6998 21.3914C43.3327 19.8821 44.5012 17.3503 45.1829 16.0844C45.3289 15.7923 45.6698 15.3054 46.4001 15.3054H64.1227C64.0253 16.62 64.0253 17.9345 63.8305 19.2491C63.295 22.7547 61.9804 25.9681 59.8381 28.7921C56.3325 33.4175 51.7558 36.2901 45.9619 37.0691C41.1904 37.702 36.7598 36.777 32.8647 33.8557C29.2617 31.1291 27.2168 27.5262 26.6813 23.0468C26.0483 17.7398 27.6063 12.9683 30.8198 8.78112C34.2767 4.25309 38.8534 1.38048 44.4525 0.35802C49.0293 -0.469683 53.4112 0.0658897 57.355 2.74375C59.9355 4.44785 61.7856 6.78489 63.0028 9.60882C63.295 10.047 63.1002 10.2905 62.5159 10.4365Z" fill="#00ACD7"/>
        <path d="M78.6318 37.3613C74.2012 37.2639 70.16 35.998 66.7518 33.0767C63.8792 30.5936 62.0778 27.4289 61.4935 23.6799C60.6171 18.1781 62.1264 13.3092 65.4372 8.97595C68.9915 4.30186 73.2761 1.86744 79.07 0.844986C84.0362 -0.031406 88.7103 0.455478 92.9462 3.32809C96.7926 5.95727 99.1783 9.51152 99.8112 14.1856C100.639 20.7585 98.7401 26.1143 94.2121 30.691C90.9986 33.9531 87.0549 35.998 82.5269 36.9231C81.2123 37.1665 79.8977 37.2152 78.6318 37.3613ZM90.2196 17.6912C90.1709 17.0582 90.1709 16.5713 90.0736 16.0845C89.1972 11.2643 84.7665 8.53776 80.1411 9.6089C75.6131 10.6314 72.6918 13.504 71.6207 18.0807C70.7443 21.8784 72.5944 25.7248 76.1 27.2828C78.7779 28.4513 81.4557 28.3053 84.0362 26.9907C87.8826 24.9944 89.9762 21.8784 90.2196 17.6912Z" fill="#00ACD7"/>
      </svg>
    ),
    javascript: () => (
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 0.000488281H0V100H100V0.000488281Z" fill="#F7DF1E"/>
        <path d="M67.1745 78.1259C69.1888 81.4148 71.8094 83.8323 76.4444 83.8323C80.338 83.8323 82.8253 81.8862 82.8253 79.1973C82.8253 75.9751 80.2698 74.8339 75.9841 72.9592L73.6348 71.9513C66.8539 69.0624 62.3491 65.4434 62.3491 57.7926C62.3491 50.745 67.719 45.3799 76.111 45.3799C82.0856 45.3799 86.3809 47.4592 89.4761 52.9037L82.1586 57.6021C80.5475 54.7132 78.8094 53.5751 76.111 53.5751C73.3587 53.5751 71.6142 55.3212 71.6142 57.6021C71.6142 60.4212 73.3602 61.5624 77.392 63.3085L79.7412 64.3148C87.7253 67.7386 92.2333 71.2291 92.2333 79.0767C92.2333 87.537 85.5872 92.1719 76.6618 92.1719C67.9348 92.1719 62.2967 88.0132 59.538 82.5624L67.1745 78.1259ZM33.9793 78.9402C35.4555 81.5592 36.7983 83.7735 40.0269 83.7735C43.1142 83.7735 45.0618 82.5656 45.0618 77.8688V45.9164H54.4586V77.9958C54.4586 87.7259 48.7539 92.1545 40.4269 92.1545C32.9031 92.1545 28.546 88.2608 26.3301 83.5712L33.9793 78.9402Z" fill="black"/>
      </svg>
    ),
    vue: () => (
      <svg width="100" height="87" viewBox="0 0 100 87" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M80 0.000488281H100L50 86.2505L0 0.000488281H38.25L50 20.0005L61.5 0.000488281H80Z" fill="#41B883"/>
        <path d="M0 0.000488281L50 86.2505L100 0.000488281H80L50 51.7505L19.75 0.000488281H0Z" fill="#41B883"/>
        <path d="M19.75 0.000488281L50 52.0005L80 0.000488281H61.5L50 20.0005L38.25 0.000488281H19.75Z" fill="#35495E"/>
      </svg>
    ),
    reactRouter: () => (
      <svg width="100" height="55" viewBox="0 0 100 55" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30.6361 36.3396C25.6683 36.3396 21.619 32.2582 21.619 27.2546C21.619 22.251 25.6683 18.1696 30.6361 18.1696C35.604 18.1696 39.6533 22.251 39.6533 27.2546C39.6533 32.2546 35.6004 36.3396 30.6361 36.3396ZM8.98501 54.3775C4.02433 54.3668 -0.0142581 50.2674 3.7837e-05 45.2639C0.00287096 42.864 0.956959 40.5632 2.65321 38.8656C4.34947 37.168 6.64953 36.2121 9.04934 36.2074C14.0136 36.2181 18.0522 40.3175 18.0343 45.3246C18.0296 47.7235 17.0748 50.0229 15.3788 51.7195C13.6829 53.4161 11.3839 54.3718 8.98501 54.3775ZM91.0506 54.3775C88.6511 54.3823 86.3474 53.436 84.644 51.746C82.9405 50.056 81.9762 47.7599 81.962 45.3604C81.937 40.3496 85.9577 36.236 90.9148 36.211C93.3131 36.2072 95.6153 37.1533 97.3179 38.8424C99.0204 40.5316 99.9847 42.8263 99.9998 45.2245C100.028 50.2317 96.0041 54.3489 91.0506 54.3775Z" fill="black"/>
        <path d="M74.1493 18.6984C71.6976 17.9336 69.0778 17.6155 66.5081 17.3368C62.5339 16.9079 60.9506 15.3568 60.2787 11.3754C59.8999 9.15236 59.3709 6.87217 58.4095 4.85287C56.5761 1.01085 52.2801 -0.711806 47.9664 0.271037C44.3209 1.10377 41.2938 4.73136 41.1258 8.45544C40.9328 12.7013 43.3631 16.3289 47.5375 17.5798C49.521 18.1766 51.6297 18.4733 53.699 18.627C57.4982 18.9022 58.7669 20.0351 59.7926 21.7649C60.4431 22.8586 61.0686 23.9343 61.0686 27.1866C61.0686 30.4425 60.436 31.5183 59.7926 32.6084C58.7669 34.3382 57.4982 35.4675 53.699 35.7499C51.6261 35.9 49.5175 36.2002 47.5375 36.7971C43.3631 38.0515 40.9328 41.672 41.1258 45.925C41.2938 49.6455 44.3245 53.2731 47.9664 54.1058C52.2801 55.0922 56.5761 53.366 58.4095 49.524C59.3745 47.5083 59.8999 45.2245 60.2787 43.0015C60.9542 39.0201 62.5375 37.4725 66.5081 37.0401C69.0814 36.7613 71.6976 36.4397 74.1493 35.6748C77.8698 34.5133 80.1071 31.043 80.1071 27.1866C80.1071 23.3339 77.8698 19.8671 74.1493 18.6984Z" fill="#F44250"/>
      </svg>
    ),
    redux: () => (
      <svg width="100" height="95" viewBox="0 0 100 95" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M69.2895 66.3024C72.9798 65.9204 75.7794 62.7392 75.652 58.9212C75.5251 55.1036 72.3434 52.0493 68.5258 52.0493H68.2715C64.3262 52.1767 61.2723 55.4852 61.3997 59.4302C61.527 61.3392 62.2903 62.9935 63.4356 64.1388C59.109 72.6653 52.4918 78.9009 42.5661 84.1184C35.8215 87.6817 28.8227 88.9544 21.8238 88.0638C16.0973 87.3001 11.6434 84.7552 8.84336 80.5552C4.77148 74.3196 4.38984 67.5747 7.82579 60.8302C10.2438 55.9942 14.0609 52.431 16.4789 50.6493C15.9699 48.995 15.2063 46.1954 14.8246 44.1595C-3.62735 57.5216 -1.71837 75.5923 3.88086 84.1184C8.08008 90.4817 16.6063 94.4267 26.0231 94.4267C28.568 94.4267 31.1129 94.172 33.6582 93.536C49.9469 90.3544 62.2907 80.6825 69.2895 66.3024ZM91.6864 50.5224C82.0149 39.1962 67.7626 32.9606 51.4739 32.9606H49.4379C48.2926 30.67 45.8747 29.1427 43.2024 29.1427H42.9477C39.0032 29.27 35.9493 32.5786 36.0762 36.5239C36.2035 40.3415 39.3848 43.3958 43.2024 43.3958H43.4567C46.2563 43.2685 48.6743 41.4868 49.6922 39.0688H51.9829C61.6544 39.0688 70.8165 41.8685 79.0884 47.3407C85.4509 51.5403 90.0321 57.0126 92.577 63.6298C94.7403 68.9747 94.613 74.1923 92.3224 78.6466C88.7595 85.3911 82.7786 89.0817 74.8887 89.0817C69.7985 89.0817 64.963 87.5544 62.4176 86.4091C61.018 87.6817 58.4727 89.7177 56.6911 90.9907C62.1633 93.5356 67.7626 94.9356 73.1071 94.9356C85.3235 94.9356 94.3587 88.1907 97.7946 81.4462C101.485 74.0649 101.23 61.3392 91.6864 50.5224ZM27.041 68.4653C27.1684 72.2833 30.3496 75.3372 34.1672 75.3372H34.4219C38.3668 75.2103 41.4207 71.9013 41.2934 67.9563C41.1664 64.1384 37.9848 61.0845 34.1672 61.0845H33.9129C33.6582 61.0845 33.2762 61.0845 33.0223 61.2114C27.8047 52.5579 25.6414 43.1411 26.4051 32.9603C26.9137 25.3247 29.459 18.7071 33.9129 13.2349C37.6032 8.52627 44.7293 6.23564 49.5653 6.10869C63.054 5.854 68.7801 22.652 69.1622 29.397C70.8165 29.7786 73.6161 30.6696 75.5251 31.306C73.9977 10.6903 61.2723 0.000488281 49.0563 0.000488281C37.6032 0.000488281 27.041 8.27236 22.8414 20.4892C16.9879 36.7782 20.8055 52.431 27.9317 64.7751C27.2957 65.6657 26.9137 67.0657 27.041 68.4657V68.4653Z" fill="#764ABC"/>
      </svg>
    ),
    scss: () => (
      <svg width="100" height="75" viewBox="0 0 100 75" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M86.1078 43.1116C82.6191 43.1299 79.5871 43.9701 77.0482 45.2121C76.1167 43.3673 75.1851 41.7235 75.0207 40.5179C74.8381 39.1115 74.6189 38.253 74.8381 36.5726C75.0573 34.8922 76.0436 32.4994 76.0253 32.3168C76.0071 32.1341 75.8061 31.2757 73.797 31.2574C71.7878 31.2391 70.0526 31.641 69.8516 32.1707C69.6507 32.7004 69.2671 33.9059 69.0114 35.1479C68.6644 36.9744 64.993 43.4952 62.8925 46.9108C62.2167 45.5774 61.6322 44.4085 61.5043 43.4769C61.3217 42.0705 61.1025 41.212 61.3217 39.5316C61.5409 37.8512 62.5272 35.4584 62.5089 35.2758C62.4907 35.0931 62.2898 34.2346 60.2806 34.2164C58.2714 34.1981 56.5362 34.5999 56.3352 35.1296C56.1343 35.6593 55.9151 36.9014 55.495 38.1069C55.0749 39.3124 50.1981 50.1986 48.9195 53.0115C48.2619 54.4544 47.6957 55.6051 47.2939 56.3906C47.2939 56.3906 47.2756 56.4454 47.2208 56.5367C46.8738 57.2125 46.6729 57.5778 46.6729 57.5778C46.6729 57.5778 46.6729 57.5778 46.6729 57.5961C46.3989 58.0892 46.1066 58.5459 45.9605 58.5459C45.8509 58.5459 45.65 57.2308 45.997 55.4408C46.7276 51.6598 48.4629 45.7784 48.4446 45.5774C48.4446 45.4679 48.7734 44.445 47.3121 43.9153C45.8874 43.3856 45.376 44.2623 45.2482 44.2623C45.1203 44.2623 45.029 44.5729 45.029 44.5729C45.029 44.5729 46.6181 37.9608 41.9969 37.9608C39.111 37.9608 35.1291 41.1207 33.1565 43.9701C31.9144 44.6459 29.2659 46.0889 26.4348 47.6414C25.3571 48.2442 24.243 48.847 23.2018 49.4132C23.1288 49.3401 23.0557 49.2488 22.9826 49.1757C17.3934 43.2029 7.05523 38.9836 7.4936 30.9651C7.65799 28.0427 8.66258 20.3712 27.3481 11.0559C42.7275 3.47573 54.9653 5.57625 57.0841 10.2339C60.1162 16.8825 50.5269 29.2299 34.636 31.0199C28.5719 31.6958 25.3937 29.3578 24.59 28.481C23.7498 27.5678 23.6219 27.513 23.3114 27.6956C22.8 27.9696 23.1288 28.7916 23.3114 29.2665C23.7863 30.5085 25.7407 32.7003 29.0468 33.778C31.9692 34.7278 39.0745 35.2575 47.6774 31.9332C57.3033 28.2071 64.8286 17.8506 62.6185 9.17453C60.4084 0.370613 45.7961 -2.53358 31.9692 2.37981C23.7498 5.30227 14.8363 9.90515 8.42513 15.8962C0.808465 23.0197 -0.397049 29.2117 0.096116 31.8053C1.86786 41.0111 14.5623 47.0021 19.6401 51.4406C19.3844 51.5868 19.1469 51.7146 18.946 51.8242C16.4071 53.0845 6.72645 58.144 4.31542 63.4958C1.57561 69.5599 4.75379 73.9071 6.85431 74.4916C13.3751 76.2998 20.0784 73.0486 23.6767 67.6786C27.275 62.3085 26.8366 55.3312 25.1745 52.1347C25.1562 52.0982 25.138 52.0617 25.1014 52.0251C25.759 51.6416 26.4348 51.2397 27.0924 50.8561C28.3892 50.089 29.6678 49.3766 30.7637 48.7922C30.1427 50.4908 29.686 52.5183 29.4669 55.4408C29.1929 58.8746 30.5993 63.3314 32.4441 65.0849C33.2661 65.852 34.2341 65.8703 34.8551 65.8703C37.0105 65.8703 37.9785 64.0803 39.0562 61.9615C40.3713 59.3678 41.5585 56.354 41.5585 56.354C41.5585 56.354 40.079 64.5004 44.0974 64.5004C45.5587 64.5004 47.0382 62.6008 47.6957 61.6327C47.6957 61.651 47.6957 61.651 47.6957 61.651C47.6957 61.651 47.7322 61.5962 47.8053 61.4683C47.9514 61.2309 48.0428 61.0848 48.0428 61.0848C48.0428 61.0848 48.0428 61.0665 48.0428 61.0482C48.6273 60.0254 49.9424 57.7057 51.8968 53.8517C54.4174 48.8835 56.8467 42.6733 56.8467 42.6733C56.8467 42.6733 57.0659 44.1893 57.8147 46.7099C58.2531 48.1894 59.1664 49.815 59.897 51.3858C59.3125 52.2078 58.9472 52.6644 58.9472 52.6644C58.9472 52.6644 58.9472 52.6644 58.9655 52.6827C58.4906 53.3037 57.9791 53.9795 57.4129 54.6371C55.422 57.0116 53.0475 59.7331 52.7187 60.5185C52.3351 61.4501 52.4265 62.1259 53.1571 62.6739C53.6868 63.0757 54.6366 63.1305 55.6046 63.0757C57.3946 62.9478 58.6549 62.5095 59.276 62.2355C60.244 61.8884 61.3765 61.3587 62.4359 60.5733C64.3903 59.1304 65.5775 57.0664 65.4679 54.3448C65.4131 52.8471 64.92 51.3493 64.3172 49.9429C64.4999 49.6872 64.6643 49.4314 64.8469 49.1757C67.9338 44.6642 70.3265 39.7143 70.3265 39.7143C70.3265 39.7143 70.5457 41.2303 71.2946 43.7509C71.6599 45.0295 72.4088 46.4177 73.0663 47.7693C70.1621 50.1255 68.3721 52.8653 67.7328 54.6553C66.5821 57.9796 67.4771 59.4774 69.1758 59.8244C69.943 59.9888 71.0389 59.6235 71.8426 59.2765C72.8654 58.9477 74.0709 58.3815 75.2216 57.5413C77.176 56.0983 79.0574 54.0891 78.9478 51.3676C78.893 50.1255 78.5642 48.9017 78.1076 47.7145C80.5734 46.6916 83.7516 46.1254 87.8065 46.6003C96.5008 47.6232 98.2178 53.048 97.889 55.3312C97.5602 57.6143 95.7337 58.8564 95.1309 59.24C94.5282 59.6235 94.3273 59.7514 94.382 60.0254C94.4551 60.4272 94.7474 60.4089 95.2588 60.3359C95.9711 60.208 99.8251 58.4911 99.9895 54.29C100.264 48.92 95.1492 43.0568 86.1078 43.1116ZM19.0373 65.7242C16.1514 68.8658 12.133 70.0531 10.3978 69.0485C8.53473 67.9708 9.26534 63.3314 12.8088 60.0071C14.9641 57.9796 17.7405 56.0983 19.5853 54.9476C20.0054 54.6919 20.6264 54.3266 21.3753 53.8699C21.5032 53.7969 21.5762 53.7603 21.5762 53.7603C21.7223 53.669 21.8685 53.5777 22.0146 53.4864C23.3114 58.2354 22.0694 62.4181 19.0373 65.7242ZM40.0425 51.4406C39.0379 53.8882 36.9374 60.1532 35.6588 59.8062C34.5629 59.5139 33.8871 54.7649 35.4396 50.0707C36.2251 47.7145 37.8872 44.9016 38.8553 43.8057C40.4261 42.0522 42.1613 41.4677 42.5814 42.1801C43.1111 43.1116 40.6635 49.9063 40.0425 51.4406ZM57.3764 59.7331C56.9563 59.9523 56.5544 60.0984 56.3718 59.9888C56.2439 59.9158 56.5544 59.6235 56.5544 59.6235C56.5544 59.6235 58.728 57.2856 59.5865 56.2262C60.0796 55.6051 60.6641 54.8745 61.2852 54.0526C61.2852 54.1256 61.2852 54.217 61.2852 54.29C61.2852 57.0846 58.5819 58.966 57.3764 59.7331ZM70.7466 56.6828C70.4361 56.4636 70.4909 55.733 71.532 53.4498C71.9339 52.5548 72.8837 51.0571 74.5093 49.6141C74.692 50.1986 74.8198 50.7648 74.8016 51.2945C74.7833 54.8197 72.2627 56.1348 70.7466 56.6828Z" fill="#CD6799"/>
      </svg>
    )
  },


  /* Outline */
  outline:  {
    notion: () => (
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z"
          fill="#ffffff"
        />
        <path
          d="M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917zM25.92 19.523c-5.247 0.353 -6.437 0.433 -9.417 -1.99L8.927 11.507c-0.77 -0.78 -0.383 -1.753 1.557 -1.947l53.193 -3.887c4.467 -0.39 6.793 1.167 8.54 2.527l9.123 6.61c0.39 0.197 1.36 1.36 0.193 1.36l-54.933 3.307 -0.68 0.047zM19.803 88.3V30.367c0 -2.53 0.777 -3.697 3.103 -3.893L86 22.78c2.14 -0.193 3.107 1.167 3.107 3.693v57.547c0 2.53 -0.39 4.67 -3.883 4.863l-60.377 3.5c-3.493 0.193 -5.043 -0.97 -5.043 -4.083zm59.6 -54.827c0.387 1.75 0 3.5 -1.75 3.7l-2.91 0.577v42.773c-2.527 1.36 -4.853 2.137 -6.797 2.137 -3.107 0 -3.883 -0.973 -6.21 -3.887l-19.03 -29.94v28.967l6.02 1.363s0 3.5 -4.857 3.5l-13.39 0.777c-0.39 -0.78 0 -2.723 1.357 -3.11l3.497 -0.97v-38.3L30.48 40.667c-0.39 -1.75 0.58 -4.277 3.3 -4.473l14.367 -0.967 19.8 30.327v-26.83l-5.047 -0.58c-0.39 -2.143 1.163 -3.7 3.103 -3.89l13.4 -0.78z"
          fill="#000000"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    ),
    openai: () => (
      <svg
        width="99"
        height="100"
        viewBox="0 0 99 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M92.0601 40.9371C93.3101 37.4996 93.6226 34.0621 93.3101 30.6246C92.9976 27.1871 91.7476 23.7496 90.1851 20.6246C87.3726 15.9371 83.3101 12.1871 78.6226 9.99963C73.6226 7.81213 68.3101 7.18713 62.9976 8.43713C60.4976 5.93713 57.6851 3.74963 54.5601 2.18713C51.4351 0.624634 47.6851 -0.000366211 44.2476 -0.000366211C38.9351 -0.000366211 33.6226 1.56213 29.2476 4.68713C24.8726 7.81213 21.7476 12.1871 20.1851 17.1871C16.4351 18.1246 13.3101 19.6871 10.1851 21.5621C7.37257 23.7496 5.18507 26.5621 3.31007 29.3746C0.497572 34.0621 -0.439928 39.3746 0.185072 44.6871C0.810072 49.9996 2.99757 54.9996 6.43507 59.0621C5.18507 62.4996 4.87257 65.9371 5.18507 69.3746C5.49757 72.8121 6.74757 76.2496 8.31007 79.3746C11.1226 84.0621 15.1851 87.8121 19.8726 89.9996C24.8726 92.1871 30.1851 92.8121 35.4976 91.5621C37.9976 94.0621 40.8101 96.2496 43.9351 97.8121C47.0601 99.3746 50.8101 99.9996 54.2476 99.9996C59.5601 99.9996 64.8726 98.4371 69.2476 95.3121C73.6226 92.1871 76.7476 87.8121 78.3101 82.8121C81.7476 82.1871 85.1851 80.6246 87.9976 78.4371C90.8101 76.2496 93.3101 73.7496 94.8726 70.6246C97.6851 65.9371 98.6226 60.6246 97.9976 55.3121C97.3726 49.9996 95.4976 44.9996 92.0601 40.9371ZM54.5601 93.4371C49.5601 93.4371 45.8101 91.8746 42.3726 89.0621C42.3726 89.0621 42.6851 88.7496 42.9976 88.7496L62.9976 77.1871C63.6226 76.8746 63.9351 76.5621 64.2476 75.9371C64.5601 75.3121 64.5601 74.9996 64.5601 74.3746V46.2496L72.9976 51.2496V74.3746C73.3101 85.3121 64.5601 93.4371 54.5601 93.4371ZM14.2476 76.2496C12.0601 72.4996 11.1226 68.1246 12.0601 63.7496C12.0601 63.7496 12.3726 64.0621 12.6851 64.0621L32.6851 75.6246C33.3101 75.9371 33.6226 75.9371 34.2476 75.9371C34.8726 75.9371 35.4976 75.9371 35.8101 75.6246L60.1851 61.5621V71.2496L39.8726 83.1246C35.4976 85.6246 30.4976 86.2496 25.8101 84.9996C20.8101 83.7496 16.7476 80.6246 14.2476 76.2496ZM8.93507 32.8121C11.1226 29.0621 14.5601 26.2496 18.6226 24.6871V25.3121V48.4371C18.6226 49.0621 18.6226 49.6871 18.9351 49.9996C19.2476 50.6246 19.5601 50.9371 20.1851 51.2496L44.5601 65.3121L36.1226 70.3121L16.1226 58.7496C11.7476 56.2496 8.62257 52.1871 7.37257 47.4996C6.12257 42.8121 6.43507 37.1871 8.93507 32.8121ZM77.9976 48.7496L53.6226 34.6871L62.0601 29.6871L82.0601 41.2496C85.1851 43.1246 87.6851 45.6246 89.2476 48.7496C90.8101 51.8746 91.7476 55.3121 91.4351 59.0621C91.1226 62.4996 89.8726 65.9371 87.6851 68.7496C85.4976 71.5621 82.6851 73.7496 79.2476 74.9996V51.2496C79.2476 50.6246 79.2476 49.9996 78.9351 49.6871C78.9351 49.6871 78.6226 49.0621 77.9976 48.7496ZM86.4351 36.2496C86.4351 36.2496 86.1226 35.9371 85.8101 35.9371L65.8101 24.3746C65.1851 24.0621 64.8726 24.0621 64.2476 24.0621C63.6226 24.0621 62.9976 24.0621 62.6851 24.3746L38.3101 38.4371V28.7496L58.6226 16.8746C61.7476 14.9996 65.1851 14.3746 68.9351 14.3746C72.3726 14.3746 75.8101 15.6246 78.9351 17.8121C81.7476 19.9996 84.2476 22.8121 85.4976 25.9371C86.7476 29.0621 87.0601 32.8121 86.4351 36.2496ZM33.9351 53.7496L25.4976 48.7496V25.3121C25.4976 21.8746 26.4351 18.1246 28.3101 15.3121C30.1851 12.1871 32.9976 9.99963 36.1226 8.43713C39.2476 6.87463 42.9976 6.24963 46.4351 6.87463C49.8726 7.18713 53.3101 8.74963 56.1226 10.9371C56.1226 10.9371 55.8101 11.2496 55.4976 11.2496L35.4976 22.8121C34.8726 23.1246 34.5601 23.4371 34.2476 24.0621C33.9351 24.6871 33.9351 24.9996 33.9351 25.6246V53.7496ZM38.3101 43.7496L49.2476 37.4996L60.1851 43.7496V56.2496L49.2476 62.4996L38.3101 56.2496V43.7496Z"
          fill="#193718"/>
      </svg>
    ),
    gitHub: () => (
      <svg
        width="100"
        height="100"
        viewBox="0 0 438.549 438.549">
        <path
          fill="currentColor"
          d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
        />
      </svg>
    ),
    framer: () => (
      <svg
        width="40"
        height="68"
        viewBox="0 0 67 98"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M63.8222 63.8219C64.8722 64.8719 64.1278 66.6663 62.6444 66.6663H35C34.0778 66.6663 33.3333 67.4108 33.3333 68.333V95.9774C33.3333 97.4608 31.5389 98.2052 30.4889 97.1552L0.65 67.3163C0.233333 66.8997 0 66.333 0 65.7441V34.9997C0 34.0775 0.744444 33.333 1.66667 33.333H33.3333L63.8222 63.8219Z"
          fill="black"/>
        <path
          d="M33.3334 33.333L2.84447 2.84408C1.79447 1.79408 2.53892 -0.000366211 4.02225 -0.000366211H65C65.9222 -0.000366211 66.6667 0.744078 66.6667 1.6663V31.6663C66.6667 32.5885 65.9222 33.333 65 33.333H33.3334Z"
          fill="black"/>
      </svg>
    ),
    discord: () => (
      <svg
        width="100"
        height="100"
        viewBox="0 0 144 110"
        fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M121.21 9.81036C112.117 5.63653 102.374 2.56327 92.1814 0.805139C91.9945 0.77053 91.8076 0.853638 91.7176 1.02668C90.4651 3.25549 89.0743 6.16954 88.1055 8.45372C77.1447 6.81326 66.2393 6.81326 55.4999 8.45372C54.5242 6.11416 53.0849 3.25549 51.8255 1.02668C51.7286 0.86056 51.5418 0.777451 51.3619 0.805139C41.1761 2.56327 31.4262 5.63653 22.3337 9.81036C22.2576 9.84496 22.1884 9.90033 22.1399 9.97647C3.65043 37.6081 -1.41494 64.5615 1.06924 91.1826C1.08308 91.3141 1.15229 91.4387 1.25608 91.5148C13.4556 100.479 25.2746 105.919 36.872 109.525C37.0589 109.581 37.2526 109.511 37.3703 109.359C40.1105 105.614 42.5601 101.662 44.6567 97.5022C44.7813 97.2599 44.6567 96.9692 44.4076 96.8723C40.5256 95.3979 36.8373 93.6052 33.2806 91.5702C32.9969 91.4041 32.9762 91.0026 33.2323 90.8088C33.9796 90.2482 34.7269 89.6667 35.4396 89.0784C35.5711 88.9676 35.751 88.9469 35.9032 89.0161C59.2434 99.6756 84.5143 99.6756 107.578 89.0161C107.73 88.94 107.91 88.9676 108.041 89.0714C108.754 89.6598 109.501 90.2482 110.256 90.8088C110.512 91.0026 110.498 91.4041 110.214 91.5702C106.664 93.6467 102.969 95.4049 99.0803 96.8723C98.8243 96.9692 98.7135 97.2599 98.838 97.5091C100.983 101.662 103.426 105.608 106.118 109.359C106.228 109.518 106.429 109.588 106.616 109.532C118.269 105.926 130.088 100.485 142.287 91.5218C142.391 91.4456 142.46 91.3211 142.474 91.1965C145.449 60.4223 137.492 33.6904 121.389 9.99033C121.348 9.91419 121.286 9.85189 121.203 9.81728L121.21 9.81036ZM48.1303 74.9718C41.0998 74.9718 35.3151 68.5207 35.3151 60.5953C35.3151 52.6699 40.9961 46.2188 48.1303 46.2188C55.2645 46.2188 61.0633 52.7322 60.9456 60.5953C60.9456 68.5207 55.2645 74.9718 48.1303 74.9718ZM95.5235 74.9718C88.493 74.9718 82.7083 68.5207 82.7083 60.5953C82.7083 52.6699 88.3892 46.2188 95.5235 46.2188C102.658 46.2188 108.456 52.7322 108.339 60.5953C108.339 68.5207 102.72 74.9718 95.5235 74.9718Z"
          fill="#5865F2"/>
      </svg>

    ),
    telegram: () => (
      <svg width="50" height="50" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z" fill="#0088CC"/>
        <path d="M8.09992 15.7083C12.3949 13.8371 15.2589 12.6034 16.6919 12.0074C20.7834 10.3056 21.6335 10.01 22.1877 10.0001C22.3095 9.99805 22.582 10.0283 22.7586 10.1715C22.9076 10.2924 22.9486 10.4558 22.9683 10.5705C22.9879 10.6851 23.0123 10.9464 22.9929 11.1505C22.7712 13.4801 21.8118 19.1335 21.3237 21.7427C21.1172 22.8468 20.7105 23.217 20.3168 23.2532C19.4613 23.3319 18.8116 22.6878 17.9829 22.1446C16.6862 21.2946 15.9537 20.7654 14.695 19.936C13.2404 18.9774 14.1834 18.4506 15.0124 17.5896C15.2293 17.3643 18.999 13.9355 19.0719 13.6244C19.0811 13.5855 19.0895 13.4405 19.0034 13.3639C18.9172 13.2874 18.7901 13.3136 18.6983 13.3344C18.5683 13.3639 16.4968 14.7331 12.4839 17.4419C11.8959 17.8457 11.3633 18.0424 10.8862 18.0321C10.3601 18.0207 9.34822 17.7346 8.59598 17.4901C7.67333 17.1902 6.94002 17.0316 7.00388 16.5223C7.03714 16.257 7.40248 15.9856 8.09992 15.7083Z" fill="white"/>
      </svg>
    ),
  }

}