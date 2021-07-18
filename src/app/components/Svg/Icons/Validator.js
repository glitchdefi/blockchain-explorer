import React from "react";
import { Svg } from "src/app/components/Svg";

const Validator = () => {
  return (
    <Svg width={36} height={40}>
      <path
        d="M35.8284 26.2476C36.1618 27.4535 36.0061 28.7171 35.39 29.8059C34.1192 32.0513 31.2589 32.8454 29.0137 31.5762C28.2639 31.1523 27.9985 30.1989 28.4211 29.4466C28.8434 28.6943 29.7938 28.428 30.5436 28.852C31.7397 29.5338 33.1975 28.4165 32.8252 27.0836C32.7142 26.6821 32.4528 26.3478 32.0891 26.1422L31.9882 26.0847C30.3941 25.1765 29.5239 23.4193 29.7711 21.6081C29.9228 20.4992 29.919 19.3509 29.7587 18.2431C29.3739 15.9575 31.0692 14.2184 32.0843 13.6797C32.4527 13.4714 32.7141 13.1371 32.8252 12.7357C32.9356 12.3365 32.8839 11.9181 32.6798 11.5573C32.2547 10.8064 31.2965 10.5415 30.5436 10.9673C30.5436 10.9673 29.2978 11.6256 28.2849 11.6256C27.2657 11.6256 26.247 11.3032 25.4044 10.6263C24.4847 9.88762 23.4659 9.29187 22.3763 8.85568C20.6644 8.17034 19.5583 6.53819 19.5583 4.69756V4.66606C19.4726 2.59216 16.5272 2.59224 16.4417 4.66606C16.4417 6.51685 15.3272 8.15236 13.6023 8.83262C12.5008 9.26709 11.4707 9.86433 10.5404 10.6078C8.88082 11.9876 6.60257 11.7295 5.45183 10.9645C4.70337 10.5415 3.74525 10.8062 3.32022 11.5571C2.88163 12.3031 3.18893 13.2853 3.94019 13.6936C5.5345 14.6021 6.42882 16.4229 6.16601 18.2246C6.0824 18.798 6.03994 19.3846 6.03994 19.9681C6.03994 20.5277 6.0789 21.0902 6.15557 21.64C6.40864 23.4539 5.53871 25.2145 3.93957 26.1257L3.91565 26.1393C3.54718 26.3476 3.28585 26.6819 3.17482 27.0834C3.06442 27.4825 3.11608 27.901 3.32022 28.2618C3.74525 29.0127 4.70353 29.2774 5.45643 28.8518C6.20621 28.428 7.15655 28.6942 7.57901 29.4465C8.00147 30.1987 7.73617 31.1522 6.98638 31.576C6.26114 31.9859 5.47155 32.1806 4.69231 32.1807C3.05904 32.1807 1.47034 31.3258 0.610074 29.8057C-0.00608296 28.717 -0.161836 27.4533 0.171643 26.2474C0.505745 25.0393 1.29036 24.0343 2.38102 23.4178C2.85467 23.1479 3.14265 22.6011 3.06909 22.0734C2.8708 20.655 2.87508 19.1888 3.08226 17.7717C3.16049 17.2355 2.86231 16.6752 2.37681 16.3986C0.16463 15.2081 -0.676781 12.179 0.610074 10.0131C1.8808 7.76776 4.74109 6.97361 6.9863 8.24281C7.33537 8.46771 8.05024 8.6321 8.59838 8.16198C9.77156 7.22431 11.0715 6.47081 12.462 5.92236C12.9863 5.71551 13.3251 5.22233 13.3251 4.66582C13.5822 -1.55713 22.4193 -1.55415 22.6749 4.66582C22.6749 5.21928 23.0111 5.74287 23.5314 5.95112C24.9068 6.50177 26.1922 7.25339 27.3522 8.18504C27.9145 8.65587 28.6523 8.50945 29.009 8.24531C31.2589 6.97353 34.1192 7.76776 35.39 10.013C36.6772 12.1819 35.8358 15.2079 33.6191 16.4009L33.5124 16.4617C33.0362 16.7331 32.7674 17.2688 32.8433 17.7949C32.9465 18.5102 32.9988 19.2414 32.9988 19.968C32.9988 20.6583 32.9518 21.3529 32.859 22.0322C32.7868 22.5607 33.0554 23.0966 33.5274 23.3655L33.6237 23.4203C34.7096 24.0345 35.4942 25.0394 35.8284 26.2476ZM25.0902 19.9096C25.0902 23.7889 21.9445 26.945 18.0778 26.945C8.77494 26.5585 8.77767 13.2592 18.0779 12.8741C21.9445 12.8741 25.0902 16.0302 25.0902 19.9096ZM21.9736 19.9096C21.9736 17.7544 20.226 16.001 18.0778 16.001C12.9095 16.2157 12.9111 23.6042 18.0778 23.8182C20.226 23.8182 21.9736 22.0648 21.9736 19.9096ZM28.3627 38.4363C28.3627 33.1776 24.1127 28.8993 18.8887 28.8993H17.4229C12.1989 28.8993 7.94887 33.1776 7.94887 38.4363C7.94887 39.2998 8.64653 39.9997 9.50719 39.9997C10.3678 39.9997 11.0655 39.2998 11.0655 38.4363C11.0655 34.9018 13.9174 32.0262 17.4229 32.0262H18.8887C22.3942 32.0262 25.2461 34.9018 25.2461 38.4363C25.2461 39.2998 25.9437 39.9997 26.8044 39.9997C27.665 39.9997 28.3627 39.2998 28.3627 38.4363Z"
        fill="#00FFFF"
      />
    </Svg>
  );
};

export default Validator;