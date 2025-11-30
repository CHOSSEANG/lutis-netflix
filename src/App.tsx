import React from 'react';
import logo from './logo.svg';
import './App.css';
import Content from "./components/Content";

function App() {

  const weeklyReleaseURLList = [
    "https://occ-0-8123-325.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABefsG2EDUvvyQtMFAgtSMWOtuqmKTtkltTciUpulyBsNsLrZlqGpBC2PwgWBFodpo3E76cXyOdw5NNtd6MPB3pJiJQwAXPLl1B4xOAn897uOGmEfuy7jRk68JiOi0p6ZngWfEIMG_e73368TMxrJHjsos2NLx4-jumVTBCUrv5OXqkElX1R-Q3iB2dK7tEf9BdQEjgaajQXytfsVkOU0vUA6UcKJd4nCI6Vce-azwQ.webp?r=d88",
    "https://occ-0-8123-325.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWcvvbGDjRlxkEuhxJvBIoZ7l6byt62rBhCC1XSNVWGBZYzhmk6ve-yWOtgeyZppHIjr3yKbIN6D2OuC0sTkh0oCMUbqqVJBhlbbKBBMuFbD8YDI6t4DeJsihVjkaHmhMUbdlFyFm6l153Do9r3S71z33o8rmtBZwuxngL8ZGpQuQyleaZwnzD2ORCCkdwIwnkVYhxAX55Pdy8k-rifdR0HUXUsb0H38ZLQJXy69DoSMuI0YzqBVnlmBnr56tyIRzxTx0XGvvp1PJO_XxB_1zvK4EPAelMyqwMeaMaz6EtswhpWzv7WlbPWkkORxBFoEmhIJWWl48PIeqJ5adt02xbIC2CFM-btiZSfrDQBRlpNAK6iyGfmcrKdQuuGXojLrVNxVu6oUStUTCSRwBjA.jpg?r=633",
    "https://occ-0-8123-325.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZLcZl3jOW-r9UgB-uyVFmDB7UxKlCFWz_zss7aFcvMwv_rOPnjyaa9TphHL-ISnTLx-lGvCy_5emVF39lB-t0eNlAtoQoE9-dkT6BkoonO7vCRPygOuGrcaJ3td3dz1Sp7IhBScumwy9m3lO8hNTio3A4RP373sBsnKPNdES8FxX2C_AYm45PcQFxE_t0Gi1bKIKN29_BVEuHSPPWB9sWmsOInD65khc4xVGA2YW0f7uWhBYEZrIOe9kD_QGwrnbngMJITJWjz_P8VS_pVWbEnzmq-HXaaA4hkIWFxpRH_yFLX1XIPy120HiWSQKPTrdw6s4KxPEMr46xk_Ei7EyywdrgBhftsY8vgDgDY479RzWsaDbdYKbuNttWoqF26OsYM6dvSdY-K67D3ItxE.webp?r=177",
    "https://occ-0-8123-325.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYcr-ZOXEtzJ0X7ThQvHDdMDmpwWPGbB6uc2A5APWOLIIjLKBFMjTVyHFuOvLjep4iM74lX-P8o7dR-rnK_FyLqblwGsW2g46DgHQkov4gdKDfWiiy9814XaZz-i7SlqYUXjcu6jgDLWf945UrD7VlQFXxmP6eZKjMLYHunfzZeEWZ82oi8OZJ4GeUhOxNDLIKWTkRE84E3theSjPFCU40WnkxW7G0z2MFkhzkPo0py59D2hyxNA-j8yswZ_H_fvxEEV9yXvAa9FzCOPZs5iQ-ChH7FiQJZL-pH0Wb-E4bQnPP_mVc5bDwcBAKX9yCbPypVTDpNN7Ef5K9j-qhluQZGInQMuBEW6NLcWcYjVLauzL07zNjFTrczhhM_pybPMVB-fwH7kAy0uneGwJKc.webp?r=46a",
    "https://occ-0-8123-325.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWunNUwBVlsYzKdvOw8Muq8NWFGlYG_AVEWNo_YIrfd9ZgZINZ3e8DNKN2vjn6JHW3xvkinrCw4aIfJfvdUBj6CZcwjglPcmTWsBUjlcq8tCiXVLFcW6ixepkHyvRr__v_FeI67onpr1QPMAUk2WsfWsD9xtB6sjthhcJpbQU7Mar20DxfMecxsjaJQVxAZmKHTvEeLrIkepRpfPnJIh5xJkI9-nkYGM4WGnDtyM6e7z29U_aU0xr9ipd8oJSYLTah2IkurEVVVL09ANdSi5CkJwMqYslcmZ9HKQ2qZNTVF8-Jy9oOG-HllDWgur78_QeHhEtLQHfMrk4fnQAt1Hhzk5XkFcAZoYsPsHCahpi1BProQWDUJiSeLqHKh_Wx8Ce6p5H-5RsAYvWHVDItk.webp?r=8b9",
    "https://occ-0-8123-325.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABX1wB1ifehUPkoaR3VRHqTVtcyQRPHTOOAXNtx01izlQnM44ErN2kQgQD78CEk-iMacnR2-8pjX_UuEVtdsNuPIl8amdb-bTUwnSmXAy6CP10rK-RGcTPZEA5Wcue5sSsg1bCdPZ_5cHswe6_YXSbiv9_bYkdVCX8vXpX4KITZPtufnqMsZfmUFprMDggSXMSEQJgmRACXT-9N4M-hvq_auSVfpnnN-KJmjXazxNQjStCxtCk3DgpJ62fjwEdoOXRC53AUd88l0Dyof6qyDmFG42rjqlEz44c8vJkR-mkAy38lUTc9KNw5GvsfTkk-lMAF_qcJro2bjp8jQuw8xxvqsU.webp?r=5aa",
    "https://occ-0-8123-325.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXX4Fd6bPpQ16OwHKjAWSQd8OruHlcHGkTgBobPZjODFHPEzYyd9P7heJsHPhTfHzIZAgCQd3urMXF4kelp9nxQs6dqR4-4XyTCLIC1UU1kPfXh0DRnHAm0SP5qqq1lIzi3-BL1qMKaKP_vIPh8Nc5gcoiDgJk0CGK2ahB4kKgjQ1_cjjyqInZAgU_zfN8KYoaQb9-lH0m5nx5okiBiqoeS59GqM-ZoUNH2E594L4zONZ4_G65jcxR90XbNrurHaboFvNnAe6Z5Og0W3wbIlwi7abcoU4Aayj1z7S66b6KWmQ1wc9epm2tcMywbaDJrPvMopn_p4YuHNvnCMwRtd1mBdk0Mkbwpk7gmXWmzv1WXA6_635C6ZRsLm631Cr9jBF8wwfMFjReupjZnqPko.webp?r=f16",
    "https://occ-0-8123-325.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcqnJloUlDBU7TYuZRWD6uhCQKs9R93p6Jybz1qSOXm0jslZFxMFvcyctZZ5gLPMt5w1riZp78raynuulHJepwAa_O3fht0yNJpDj8aowgj6xqPizi57TSbAm-88w9kG9_I6P6U51jy4eiee_D_yxfzJanJFTizoRJyCpxZ-QezR1I7xNyrrTLyZyTUI2a0NhU98o8pw5bpcxEFUUtHt5CeRv4CwLgLrlhxCrXAZ9jqj4IWaA5Qe4rIdUxZa5kJCkhvp-5lBwSUDmoqJSrqf0bfK5i9PgeHXq4i51cld7WHC9SgbGfh5-VmIAT4nQ00__5s9fbMf7LLO9pRlvPo5eBRF.webp?r=83e",
    "https://occ-0-8123-325.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJFroa1o6e1QA33Rd7HT8RyNTRLE-AYPD2dQAqxnKtY70H64NGh-wt9_7c_MQPzorS2YOUQdGM1Cs4ZrUQPSQ8veT6cNlQiQ2K6vvYveKio8eFLENVgLl-F86UzXBjRbzRZBC3ysMLLidYPuFntDE_reLQO_N8XUiCgttV0WICTNbfq1nfBVx9JaCkM28Ue5RKfUJG671X8Xz8mNGkEKKhzkvE5dWfY_zAVgiTM40uoFXpBcqf9_sf3TEk3BkmAq4rZ-LHNe9REoyw3eJxJyTB1T2dtXPBz28Nh3YtQkGWVoOFVMSr4t8Un6HWbk-NyTdUvJgikmw5yfuOjh9q-1MeD.webp?r=39a",
    "https://occ-0-8123-325.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfsUmENx_G5IpyoHyyWTXHB3PaEjw2_B2yNI5X5eTLP74RKoAdXy4DU3wgjdybNOuQs9PE3dwoNFGzEtbK3Xbnu7o_LkcikVOsfGBt9IR9p-2WvkPUU-DyV_Ydx3zIgisCq-ymhguN-Dsrr3VW4p2RWjBufWvWj25QzEt_zMHOXnT818frEqHlPyj8s2AL0SaYAyARY9MfQx20czRJ4NN2DHkxoQM7sVEfXJNMfzWF8786ND73FXQXf219QVuWjdwPGZHJITBdiewfYJNmWbTOViBtUH6ED9WWP8SFFIpDnG8uPyYLwr9W21Hz3WPwK6Ko-yaFF4fv4w8ZB3pZVUiCsv.webp?r=323"
  ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Content contentTitle={"매주 공개! 이건 꼭 봐야돼!!"} content={weeklyReleaseURLList} />
      </header>
    </div>
  );
}

export default App;
