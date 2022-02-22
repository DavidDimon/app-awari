import React from 'react'

const Bug = ({ className, fill }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M6.54171 10.2792C7.15335 10.1541 7.70304 9.82166 8.09784 9.33804C8.49263 8.85442 8.7083 8.2493 8.70837 7.625V6C8.7091 5.62724 8.63256 5.25837 8.48358 4.91667H3.5165C3.36752 5.25837 3.29098 5.62724 3.29171 6V7.625C3.29178 8.2493 3.50745 8.85442 3.90224 9.33804C4.29704 9.82166 4.84673 10.1541 5.45837 10.2792V7.08334H6.54171V10.2792ZM2.49871 9.08209C2.3065 8.62038 2.20782 8.12512 2.20837 7.625H0.583374V6.54167H2.20837V6C2.20837 5.65171 2.2555 5.31479 2.34325 4.99467L1.14454 4.30242L1.68621 3.36425L2.78037 3.99584C2.81491 3.94076 2.85085 3.88657 2.88817 3.83334H9.11192C9.14929 3.88642 9.18504 3.94113 9.21971 3.99584L10.3139 3.36425L10.8555 4.30242L9.65683 4.99467C9.74458 5.31425 9.79171 5.65171 9.79171 6V6.54167H11.4167V7.625H9.79171C9.79171 8.14121 9.68879 8.63359 9.50138 9.08209L10.8555 9.86425L10.3139 10.8024L8.94562 10.0127C8.59049 10.4516 8.14163 10.8055 7.63194 11.0485C7.12226 11.2914 6.56466 11.4172 6.00004 11.4167C5.43542 11.4172 4.87783 11.2914 4.36814 11.0485C3.85845 10.8055 3.40959 10.4516 3.05446 10.0127L1.68621 10.8024L1.14454 9.86425L2.49871 9.08263V9.08209ZM3.83337 2.75C3.83337 2.17537 4.06165 1.62427 4.46798 1.21794C4.8743 0.811609 5.42541 0.583336 6.00004 0.583336C6.57468 0.583336 7.12578 0.811609 7.53211 1.21794C7.93843 1.62427 8.16671 2.17537 8.16671 2.75H3.83337Z"
      fill={fill || '#A7B723'}
    />
  </svg>
)

export default Bug