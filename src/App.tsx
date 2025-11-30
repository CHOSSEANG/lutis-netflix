import React from 'react';
import './App.css';
import Content from "./components/Content";
import Header from './components/Header/Header';
import Background from './components/Background/Background';

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

    const romanticKoreanSeriesURLLIST=[
      "https://occ-0-8123-325.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABX4iKP5FKaiEWOOtQPTjWxAdL_hGJLktMxCQ3iEKFQHnXZxWjo79GNE7f3STxZufRlhzwxqaHM_PEaLHUr-3ibgsnNWfwFXcTwk.jpg?r=70e",
      "https://occ-0-8123-325.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABerE5Vn9boFlZ_wL0CU0FB1icRwzzyKQxWpVG6AhiNYsRU3VUyTmhIsppZCmqKAa2GxQhy6O3X-yt7JrFME8Ew7CwengNYhrRuA.jpg?r=c46",
      "https://occ-0-8123-325.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUpkuIOBt94F5GbveJxgbniP2l1Kgm-J6pOX8j0NnZSt0W5ounXPiekKmfTC2zd_qEGkRD7QUsE_kbHG2B1vKr3itIveYoQ6urw.webp?r=f58",
      "https://occ-0-8123-325.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABY5ISI8rpQjX8l9FjNgUJN-GinY_zd2XNEMlsQR6GN6BJ10uY_y3RtvOJQGqYdm-VXotwMerBk7nZ72EE-mek6otfwVMGNHQREM.webp?r=754",
      "https://occ-0-8123-325.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdKo4FaYljZ8-vkmOOToai5hQwB2rpM_KL4qdjyq02aNqkiG2c_805yUh01RK1SrXtVaf3eu7Y399wNPh4sP8pAc399-aQdd8p0.webp?r=117",
      "https://occ-0-8123-325.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSn-HDdYIG5q-C12VapyKbc3RHnBxuhu92hxCOetaD0RJo8Fu_wYoPkGo4VHXKx9e9YY5SN3f4fQIpU6QBcFZTQpojFOkImHYJs.webp?r=491",
      "https://occ-0-8123-325.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-OCobQ3YIDPyihVxhL6vzL_6AUThJd0VgGetzIPWnTN7J2juNOPbS52cOcehdKDrXPv_q97h2YbV9OBv683bcpXedRPN4A36Y.webp?r=6f5",
      "https://occ-0-8123-325.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYfFGQf80ynD96eIdOLuOj5Gf9ZWLMT334dgWU6Ho74RO7izYYRLnfRmGu2hYwLQ3ZI3V3KyvrxztmrtL5x3mQPKPpfBQo1VMS4.webp?r=c63",
      "https://occ-0-8123-325.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdDMEuCL3fiTbKt77NKYCI1yMy_pBNaqiZyjVJwQhCsaiLzbXijsgVxriDcNbU5ap4uW4vjX6m0hwWw7tQ9wHDUa_oAOETRuVCc.webp?r=352",
      "https://occ-0-8123-325.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQ-620rn4qc0tnZRDmNL5tzdJpacOSKcdX7dgwvnYPYzp1VaJVtb_i4yhsHwcos4FAoOA9j_a35ozqKDQHooZEKAq6sCtqSJJ3U.webp?r=d9d"
  ]

    const loveIsKContentURLList = [
        "https://occ-0-8123-325.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcOFu3xh2r5bQnmI9hiceBKquU1dbv9YL0QsvcJuCNdShPg0JGnD-Wtc9mT-jAYmc2i4cMOSLSauZfaATxWoIKbv9aeh91s__Ko.jpg?r=571",
        "https://occ-0-8123-325.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZDFt0APrsHdkOOdu9j8hOZD2E1UTIIg0KaUvSXVfcm2bEfNeoENi-hpDEConGU1Ab2rdQTFe4u3Rxk8LhxQ3q_VgjQCNUwkQdo.jpg?r=219",
        "https://occ-0-8123-325.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRwtJrhzU8q63cDEjryWXWTZmcO8B5mtura_TJBV-3zy1zvUKpnn8IvdoD9ryUx8vSO2pc2kFgN6X8mcwzB-30OdqyBELs4JP5I.webp?r=377",
        "https://occ-0-8123-325.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbQvJtpMEmDbXNGvSN1RAkdQQitH6lsKSM7mBihLJGEVgtl9BbrgE43JGqGfVvGzDvfp7BIAQfh0RgJ_re2lIp5mMvoAdWPVOQ8.webp?r=ec6",
        "https://occ-0-8123-325.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdwU9TpVoL0jyXGGpjYHzekIs9Z2OA9ld-wdgOPImM0DBQNLhlFZznvyigB_CIrVIAyOuRmSpfXKvgkN0jKh297M4n8fzN3egPWihe96juQSaxtUgIO4gNUGnbZv144T8Uhoku4Utyzfi0UhiLpKVgcDwE2yW43nBo9aBvJZiP38484rrwx32CiDf7Eenx-6OFExoumWDhYcASDWH-dwtnghCX0OIo3L7U60kQ.webp?r=bdf",
        "https://occ-0-8123-325.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXqskMUromuejMkcquhUMobg11djMDjvRNgt9y_Wih2tmzJEvrjlciGZzIz27AT3MarWP_ZVY1JZkCqcVJHt9nEq-hN3D2IZEYw.jpg?r=bfb",
        "https://occ-0-8123-325.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUpkuIOBt94F5GbveJxgbniP2l1Kgm-J6pOX8j0NnZSt0W5ounXPiekKmfTC2zd_qEGkRD7QUsE_kbHG2B1vKr3itIveYoQ6urw.webp?r=f58",
        "https://occ-0-8123-325.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdKo4FaYljZ8-vkmOOToai5hQwB2rpM_KL4qdjyq02aNqkiG2c_805yUh01RK1SrXtVaf3eu7Y399wNPh4sP8pAc399-aQdd8p0.webp?r=117",
        "https://occ-0-8123-325.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZmYEZEKL0yFiZ8KHDLtJxbZq1DwLpD7HEfFLSMVUoL84kFNREgIsCox7kqeDewjLarVU-vnY2I-Qnbxv1PABw_nRVKCtyiJpp8.webp?r=3a3",
        "https://occ-0-8123-325.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABe-QDGYDrKNTbaYxgbz2snd-NBTZK_iDcM3RuGij0m3i36x6D9szH-rE93dM7iFzDlyREliIUJwEXdSuFFYVuquP2_p_XqTLNTM.webp?r=e1b"
    ]

    const japanMovieAndSeriesURLList = [
        "https://occ-0-8123-325.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdCDGNyBx2ZkSs4GXFcvPwEu1YoqTUiiY7CN_uivycxteKYWvGV_dxOa4IpTiwQroFeAIsqUKnwABYFpFm7O2qUvQWwIVnQ1Er8.webp?r=d1e",
        "https://occ-0-8123-325.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZntp9Ec41ULX19CMBgQnE6kcxM6MaY8u-JTpctjbfIyD8-UpFZALzYQZ2xcDlm3KtyhfAc1dqDqWpQ3Yuc-DBtpyO69ZWJ2rKE.webp?r=5c5",
        "https://occ-0-8123-325.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdJR2odTZeFJb0aS1SqYMC2n1qv948ksMI3EQSC1FH_CEAwsw4WwTccQTocya_cfJ0J5j0PiDTv2FFTSvkjZy1Hkezs61YunS_0ZYf0qudbRXEFbhOo0SfqskYMtDtShhL0_eQkmJ3zfEAH3Lr0f8Q0gtXqFB-YPuojLkkHffXXgJCnfyktn9JA-aXbYTcv99Akrz39miVwoDanaagVIbwyODqoJVIRGMj-g1dutp8U8eFzIL4lkDc8IAhw7gyHBCMBcJA3rFsaRjIUYJ8snarAOW4YtijCa_0Ix9RlXNgnFA_pkERHMojALIrTM-Ev5TLGWBrNQUrPGmX-foDyg5nth.webp?r=30e",
        "https://occ-0-8123-325.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRZlOCNmbNLdr6XfLhFuBgZxniONwk8k0I0gB0klNQW6FrPrzk3C7E_GTQxIg2feYx_8pDIePzriR-fy7scSFs5hjREh6InwhOAATJdGQK7zjDmPCIgwhB9CRMGWYTZgJw_rLffJSGIYQ4y5D4SAdlMPRF_NTBLAtbXnkVt2sVKZqxxVU14NHtNhXQ2aFiYeAZpX8rlapIMGpgqJDpWoKfnFXJpIxPkO78uIARDVSazg7Pk9SQTlXI6MexPhkwAmNEI8jN3cfboXozw6zTy7YCeBChaZ6Z2qs1fiFMQ4Q6u09m36ob6Ef3rXpS-fhuUcXM7k2bis81Eqz8inSJjiUPUx.webp?r=aaa",
        "https://occ-0-8123-325.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbOT4wz3BrX_OFzBnIp6QYgu_G_x_xwxQncptwBLtCY6ivTRrhNaaPEZwAhC4qWRJzPhQMKwZf2pxzA_ovfvorddb-iY6r-uyGQ.webp?r=c70",
        "https://occ-0-8123-325.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABd39JiV1vMPVpXa-eoWRjsHDlyow-JbELB448elQeGJUTN3rHNiufUVu_wme3VZBQbieeKtdw_mR5xa4uD10Kf1ISzJ-cU8m3RU.webp?r=80a",
        "https://occ-0-8123-325.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYmLJ-COS5bv06bDWxPe81DldyezXR99-1RBK-lVkdpb1tfjnYgAncPt0D3FvEr4y5h9CPCo765wsOrAjtqoP8f8QbDd63yxZs8.webp?r=9e5",
        "https://occ-0-8123-325.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXLZNgUOwj93S2M41gDiLcrMZwaASsmSx8JEBuEPmY1BVIJMQTY2nURQrkC2JIy4XIXXHAUe0GhTf1Vv0OBTHIrBx-Yo6QkNLCA.webp?r=102",
        "https://occ-0-8123-325.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQtV51Ujdgrd0rJvx07icMdLQOyC4RTBxkWLP4mHFxHoPLmeeHuXt63HNW9NYRmGWnDwO_z-kUPdHZcBBHC8WUN_A2R2PuSQRjo.webp?r=ee5",
        "https://occ-0-8123-325.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTMO-SxBoID7aNwvOnJB52cjheghZ53vye0hSDZucA-ZPzQJhhj4tRpyInROIagP3sicIdsjSKHjAAg6B3BDSVPo7mCrwXHkpII.jpg?r=e56"
    ]

  return (
    <div className="App">
      <Header />
      <Background />
      <header className="App-header">
        <Content contentTitle={"매주 공개! 이건 꼭 봐야돼!!"} content={weeklyReleaseURLList} />
        <Content contentTitle={"평단의 찬사! 로맨틱한 한국 시리즈"} content={romanticKoreanSeriesURLLIST} />
        <Content contentTitle={"사랑은 K-컨텐츠를 타고"} content={loveIsKContentURLList} />
        <Content contentTitle={"일본의 영화&시리즈"} content={japanMovieAndSeriesURLList} />
      </header>
    </div>
  );
}

export default App;
