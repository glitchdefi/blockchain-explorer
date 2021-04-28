import React from "react";
import { Svg } from "src/app/components/Svg";

const Money = () => {
  return (
    <Svg width={18} height={18}>
      <path
        d="M18 3.375V14.625H1.125V12.375H0V2.25H15.75V3.375H18ZM13.5 3.375C13.5 3.5332 13.5293 3.67969 13.5879 3.81445C13.6465 3.94922 13.7256 4.06641 13.8252 4.16602C13.9248 4.26562 14.0449 4.34766 14.1855 4.41211C14.3262 4.47656 14.4727 4.50586 14.625 4.5V3.375H13.5ZM1.125 4.5C1.2832 4.5 1.42969 4.4707 1.56445 4.41211C1.69922 4.35352 1.81641 4.27441 1.91602 4.1748C2.01562 4.0752 2.09766 3.95508 2.16211 3.81445C2.22656 3.67383 2.25586 3.52734 2.25 3.375H1.125V4.5ZM1.125 9C1.43555 9 1.72559 9.05859 1.99512 9.17578C2.26465 9.29297 2.50488 9.4541 2.71582 9.65918C2.92676 9.86426 3.08789 10.1016 3.19922 10.3711C3.31055 10.6406 3.36914 10.9336 3.375 11.25H12.375C12.375 10.9395 12.4336 10.6494 12.5508 10.3799C12.668 10.1104 12.8291 9.87012 13.0342 9.65918C13.2393 9.44824 13.4766 9.28711 13.7461 9.17578C14.0156 9.06445 14.3086 9.00586 14.625 9V5.625C14.3145 5.625 14.0244 5.56641 13.7549 5.44922C13.4854 5.33203 13.2451 5.1709 13.0342 4.96582C12.8232 4.76074 12.6621 4.52344 12.5508 4.25391C12.4395 3.98438 12.3809 3.69141 12.375 3.375H3.375C3.375 3.68555 3.31641 3.97559 3.19922 4.24512C3.08203 4.51465 2.9209 4.75488 2.71582 4.96582C2.51074 5.17676 2.27344 5.33789 2.00391 5.44922C1.73438 5.56055 1.44141 5.61914 1.125 5.625V9ZM14.625 10.125C14.4668 10.125 14.3203 10.1543 14.1855 10.2129C14.0508 10.2715 13.9336 10.3506 13.834 10.4502C13.7344 10.5498 13.6523 10.6699 13.5879 10.8105C13.5234 10.9512 13.4941 11.0977 13.5 11.25H14.625V10.125ZM1.125 11.25H2.25C2.25 11.0918 2.2207 10.9453 2.16211 10.8105C2.10352 10.6758 2.02441 10.5586 1.9248 10.459C1.8252 10.3594 1.70508 10.2773 1.56445 10.2129C1.42383 10.1484 1.27734 10.1191 1.125 10.125V11.25ZM16.875 4.5H15.75V12.375H2.25V13.5H16.875V4.5ZM3.9375 7.875C3.78516 7.875 3.65332 7.81934 3.54199 7.70801C3.43066 7.59668 3.375 7.46484 3.375 7.3125C3.375 7.16016 3.43066 7.02832 3.54199 6.91699C3.65332 6.80566 3.78516 6.75 3.9375 6.75C4.08984 6.75 4.22168 6.80566 4.33301 6.91699C4.44434 7.02832 4.5 7.16016 4.5 7.3125C4.5 7.46484 4.44434 7.59668 4.33301 7.70801C4.22168 7.81934 4.08984 7.875 3.9375 7.875ZM11.8125 7.875C11.6602 7.875 11.5283 7.81934 11.417 7.70801C11.3057 7.59668 11.25 7.46484 11.25 7.3125C11.25 7.16016 11.3057 7.02832 11.417 6.91699C11.5283 6.80566 11.6602 6.75 11.8125 6.75C11.9648 6.75 12.0967 6.80566 12.208 6.91699C12.3193 7.02832 12.375 7.16016 12.375 7.3125C12.375 7.46484 12.3193 7.59668 12.208 7.70801C12.0967 7.81934 11.9648 7.875 11.8125 7.875ZM7.875 10.125C7.56445 10.125 7.27441 10.0664 7.00488 9.94922C6.73535 9.83203 6.49512 9.6709 6.28418 9.46582C6.07324 9.26074 5.91211 9.02344 5.80078 8.75391C5.68945 8.48438 5.63086 8.19141 5.625 7.875V6.75C5.625 6.43945 5.68359 6.14941 5.80078 5.87988C5.91797 5.61035 6.0791 5.37012 6.28418 5.15918C6.48926 4.94824 6.72656 4.78711 6.99609 4.67578C7.26562 4.56445 7.55859 4.50586 7.875 4.5C8.18555 4.5 8.47559 4.55859 8.74512 4.67578C9.01465 4.79297 9.25488 4.9541 9.46582 5.15918C9.67676 5.36426 9.83789 5.60156 9.94922 5.87109C10.0605 6.14062 10.1191 6.43359 10.125 6.75V7.875C10.125 8.18555 10.0664 8.47559 9.94922 8.74512C9.83203 9.01465 9.6709 9.25488 9.46582 9.46582C9.26074 9.67676 9.02344 9.83789 8.75391 9.94922C8.48438 10.0605 8.19141 10.1191 7.875 10.125ZM6.75 7.875C6.75 8.0332 6.7793 8.17969 6.83789 8.31445C6.89648 8.44922 6.97559 8.56641 7.0752 8.66602C7.1748 8.76562 7.29492 8.84766 7.43555 8.91211C7.57617 8.97656 7.72266 9.00586 7.875 9C8.0332 9 8.17969 8.9707 8.31445 8.91211C8.44922 8.85352 8.56641 8.77441 8.66602 8.6748C8.76562 8.5752 8.84766 8.45508 8.91211 8.31445C8.97656 8.17383 9.00586 8.02734 9 7.875V6.75C9 6.5918 8.9707 6.44531 8.91211 6.31055C8.85352 6.17578 8.77441 6.05859 8.6748 5.95898C8.5752 5.85938 8.45508 5.77734 8.31445 5.71289C8.17383 5.64844 8.02734 5.61914 7.875 5.625C7.7168 5.625 7.57031 5.6543 7.43555 5.71289C7.30078 5.77148 7.18359 5.85059 7.08398 5.9502C6.98438 6.0498 6.90234 6.16992 6.83789 6.31055C6.77344 6.45117 6.74414 6.59766 6.75 6.75V7.875Z"
        fill="white"
      />
    </Svg>
  );
};

export default Money;