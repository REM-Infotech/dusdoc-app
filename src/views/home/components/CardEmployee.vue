<template>
  <div class="card">
    <div class="d-flex justify-content-center align-items-center">
      <img
        class="rounded rounded-3 ms-4"
        src="@/assets/img/favicon.png"
        alt=""
        style="min-width: 64px; min-height: 64px"
        width="64px"
        height="64px"
      />
      <div class="card-body mb-2 mt-2">
        <h5>André Santos</h5>
        <div class="d-flex gap-2 text-body-secondary fw-semibold mb-2" style="font-size: 13px">
          <span>ID: 12345</span> •
          <span>Analista de TI</span>
        </div>
        <div
          class="status bg-success bg-opacity-25 w-25 d-flex justify-content-center align-items-center gap-1 rounded"
        >
          <i>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_3_2494)">
                <path
                  d="M6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12ZM8.64844 4.89844L5.64844 7.89844C5.42812 8.11875 5.07188 8.11875 4.85391 7.89844L3.35391 6.39844C3.13359 6.17812 3.13359 5.82188 3.35391 5.60391C3.57422 5.38594 3.93047 5.38359 4.14844 5.60391L5.25 6.70547L7.85156 4.10156C8.07187 3.88125 8.42812 3.88125 8.64609 4.10156C8.86406 4.32188 8.86641 4.67812 8.64609 4.89609L8.64844 4.89844Z"
                  fill="#16A34A"
                />
              </g>
              <defs>
                <clipPath id="clip0_3_2494">
                  <path d="M0 0H12V12H0V0Z" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </i>
          <span class="status-text">Ativo</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="css" module>
.status {
  /* span */

  position: absolute;
  width: 63.2px;
  height: 20px;
  left: 0px;
  top: 52px;

  background: #f0fdf4;
  border-radius: 4px;
}

.status-text {
  position: absolute;
  width: 32px;
  height: 15px;
  left: 24px;
  top: 2px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

  color: #16a34a;
}
</style>
