import { cardDataObjT } from '../types/cardProps'

// const fontSize = {
//    primary: '16px',
//    secondary: '12px',
// }

export const cardObj: cardDataObjT[] = [
   {
      id: 1,
      dimensions: {
         img_dimensions: {
            top: {
               top: '55%',
               left: '14%',
               height: '91%',
               width: '132%',
            },
            middle: {
               top: '36%',
               left: '33%',
               height: '84%',
               width: '207%',
            },
            bottom: {
               top: '48%',
               left: '48%',
               height: '104%',
               width: '360%',
            },
         },
         card_dimensions: {
            width: '120px',
            height: '600px',
         },
      },
      flexbox: {
         ImageWrapper: {
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
         },
         TxtFlex: {
            flexWrap: 'wrap',
            maxWidth: '100%',
            height: '50%',
         },
         BxlLogo: {
            height: '28px',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'normal',
            margin: '10px 0px 25px 0px',
         },
      },
      fonts: {
         title: {
            size: '14px',
            width: '80%',
            maxWidth: '100px',
            weight: '700',
            alignSelf: 'center',
            margin: '15px 0 0 0 ',
            flexShrink: 3,
         },
         subTitle: {
            size: '12px',
            weight: '700',
            width: '85%',
            alignSelf: 'center',
            margin: '0 0 13px 0',
         },
         firstDes: {
            size: '10px',
            width: '52%',
            alignSelf: 'center',
         },
         country: {
            size: '16px',
            weight: '600',
            position: 'relative',
            right: '13%',
         },
         secondDes: {
            size: '10px',
            width: '60%',
            alignSelf: 'center',
            margin: '0 0 10px 0',
         },
         cta: {
            padding: '0 5px',
            margin: '3px 0',
            maxWidth: '50%',
            weight: '700',
            size: '9px',
         },
      },
   },
   {
      id: 2,
      dimensions: {
         img_dimensions: {
            top: {
               top: '55%',
               left: '14%',
               height: '100%',
               width: '126%',
            },
            middle: {
               top: '47%',
               left: '29%',
               height: '112%',
               width: '224%',
            },
            bottom: {
               top: '48%',
               left: '48%',
               height: '115%',
               width: '374%',
            },
         },
         card_dimensions: {
            width: '160px',
            height: '600px',
         },
         cta_button: {
            margin: ' 0',
         },
      },
      flexbox: {
         ImageWrapper: {
            alignItems: 'center',
            justifyContent: 'center',
            height: '60%',
            width: '100%',
         },
         TxtFlex: {
            margin: '10px 0 0 0',
            padding: '10px 0 0 0',
            width: '80%',
         },
         BxlLogo: {
            height: '28px',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'normal',
            margin: '25px 0px 25px 0px',
         },
      },
      fonts: {
         title: {
            width: '100%',
            weight: '700',
            margin: '0',
            size: '15px',
            alignSelf: 'center',
         },
         subTitle: {
            size: '11px',
            weight: '700',
            margin: '0 0 10px 0',
         },
         firstDes: {
            size: '9px',
            maxWidth: '45%',
            alignSelf: 'center',
         },
         secondDes: {
            size: '9px',
            maxWidth: '70%',
            alignSelf: 'center',
            margin: '0 0 10px 0',
         },
         country: {
            size: '16px',
            weight: '600',
            position: 'relative',
            right: '13%',
         },
         cta: {
            size: '9px',
            weight: '700',
            maxWidth: '50%',
            margin: '0',
            padding: '2px 8px',
         },
      },
   },
   {
      id: 3,
      dimensions: {
         img_dimensions: {
            top: {
               top: '57%',
               left: '35%',
               height: '91%',
               width: '47%',
            },
            middle: {
               top: '44%',
               left: '40%',
               height: '100%',
               width: '108%',
            },
            bottom: {
               top: '50%',
               left: '48%',
               height: '104%',
               width: '136%',
            },
         },
         card_dimensions: {
            width: '300px',
            height: '600px',
         },
         logo: {
            height: '5%',
            gap: '2px',
         },
         cta_button: {
            padding: '10px 15px',
            borderRadius: '4px',
         },
      },
      flexbox: {
         ImageWrapper: {
            width: '380px',
            height: '330px',
         },
         BxlLogo: {
            height: '35px',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'normal',
            margin: '20px 0px 25px 0px',

            mediaQuery: {
               firefox: {
                  height: '35px',
                  width: '5em',
                  alignItems: 'normal',
                  flexDirection: 'row',
                  margin: '15px 0px',
               },
            },
         },
         TxtFlex: {
            width: '80%',
         },
      },
      fonts: {
         title: {
            size: '19px',
            weight: '700',
            alignSelf: 'center',
            width: '100%',
            margin: '18px 0 0 0',
         },
         subTitle: {
            weight: '700',
            size: '15px',
            margin: '0 0 10px 0',
         },
         description: {
            size: '14px',
            alignSelf: 'center',
            align: 'center',
            weight: '500',
            width: '50%',
            margin: '10px',
         },
         firstDes: {
            size: '13px',
            weight: '500',
            width: '35%',
            alignSelf: 'center',
         },
         secondDes: {
            size: '13px',
            weight: '500',
            width: '100%',
            alignSelf: 'center',
            margin: '0 0 7px 0',
         },
         cta: {
            margin: '0',
         },
      },
   },
   {
      id: 4,
      dimensions: {
         img_dimensions: {
            top: {
               top: '60%',
               left: '45%',
               height: '113%',
               width: '24%',
            },
            middle: {
               top: '50%',
               left: '32%',
               height: '134%',
               width: '63%',
            },
            bottom: {
               top: '52%',
               left: '51%',
               height: '129%',
               width: '70%',
            },
         },
         card_dimensions: {
            width: '250px',
            height: '250px',
         },
         cta_button: {
            margin: '0',
         },
      },
      flexbox: {
         ImageWrapper: {
            height: '60%',
            width: '380px',
         },
         BxlLogo: {
            height: '23px',
            flexDirection: 'row',
            alignItems: 'normal',
            margin: '10px 0px 10px 0px',
            mediaQuery: {
               firefox: {
                  height: '23px',
                  width: '5em',
                  alignItems: 'normal',
                  flexDirection: 'row',
                  margin: '15px 0px',
               },
            },
         },
         CondLogoBtnFlex: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            gap: '49px',
         },
         CondTxtFlex: {
            flexDirection: 'column',
            margin: '13px 6px 11px 6px',
            gap: '4px',
         },
      },
      fonts: {
         title: {
            size: '11px',
            alignSelf: 'center',
            weight: '700',
            padding: '0',
         },
         subTitle: {
            size: '8px',
            weight: '700',
            margin: '3px 0px 0px 2px',
         },
         firstDes: {
            size: '8px',
         },
         secondDes: {
            size: '8px',
         },
         country: {
            position: 'relative',
            bottom: '3px',
            size: '9px',
            weight: '700',
            margin: '2px',
         },
         cta: {
            size: '10px',
            width: '50%',
            padding: '3px 6px',
         },
      },
   },
   {
      id: 5,
      dimensions: {
         img_dimensions: {
            top: {
               top: '62%',
               left: '43%',
               height: '121%',
               width: '28%',
            },
            middle: {
               top: '56%',
               left: '36%',
               height: '136%',
               width: '69%',
            },
            bottom: {
               top: '53%',
               left: '50%',
               height: '137%',
               width: '79%',
            },
         },
         card_dimensions: {
            width: '300px',
            height: '250px',
         },
      },
      flexbox: {
         ImageWrapper: {
            width: '380px',
            height: '59%',
         },
         BxlLogo: {
            height: '23px',
            flexDirection: 'row',
            alignItems: 'normal',
            margin: '5px 10px 10px 0px',
            mediaQuery: {
               firefox: {
                  height: '23px',
                  flexDirection: 'row',
                  width: '6em',
                  alignItems: 'normal',
                  margin: '15px 0px',
               },
            },
         },
         CondTxtFlex: {
            alignItems: 'flex-start',
            margin: '15px 0px 0px 8px',
            gap: '3px',
         },
         CondLogoBtnFlex: {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
         },
      },
      fonts: {
         title: {
            size: '13px',
            weight: '700',
         },
         subTitle: {
            size: '10px',
            weight: '700',
            alignSelf: 'center',
         },
         firstDes: {
            size: '9px',
         },
         secondDes: {
            size: '9px',
         },
         country: {
            position: 'relative',
            bottom: '5px',
            size: '12px',
            weight: '700',
            margin: '2px',
         },
         cta: {
            size: '11px',
            weight: '700',
            alignSelf: 'center',
            padding: '6px 5px',
         },
      },
   },
   {
      id: 6,
      dimensions: {
         img_dimensions: {
            top: {
               top: '58%',
               left: '41%',
               height: '110%',
               width: '34%',
            },
            middle: {
               top: '50%',
               left: '30%',
               height: '133%',
               width: '94%',
            },
            bottom: {
               width: '100%',
               height: '',
            },
         },
         card_dimensions: {
            width: '468px',
            height: '400px',
         },
         cta_button: {
            padding: '0px 10px',
            borderRadius: '4px',
         },
      },
      flexbox: {
         ImageWrapper: {
            width: '100%',
            height: '63%',
         },
         BxlLogo: {
            height: '33px',
            flexDirection: 'row',
            alignItems: 'normal',
            margin: '10px 0px 10px 0px',
            mediaQuery: {
               firefox: {
                  height: '33px',
                  width: '8em',
                  alignItems: 'normal',
                  flexDirection: 'row',
                  margin: '15px 0px',
               },
            },
         },
         CondTxtFlex: {
            margin: '15px 0px',
            gap: '5px',
         },
         CondLogoBtnFlex: {
            width: '95%',
            flexDirection: 'row',
            justifyContent: 'space-between',
         },
      },
      fonts: {
         title: {
            size: '20px',
            weight: '700',
            alignSelf: 'center',
         },
         subTitle: {
            size: '14px',
            margin: '3px 0px 0px 5px',
            weight: '700',
            alignSelf: 'center',
         },
         firstDes: {
            size: '14px',
            weight: '500',
            alignSelf: 'center',
         },
         secondDes: {
            size: '14px',
            weight: '500',
            alignSelf: 'center',
         },
         country: {
            size: '18px',
            weight: '700',
            margin: '2px',
            alignSelf: 'center',
         },
         cta: {
            size: '15px',
            weight: '700',
            alignSelf: 'center',
            padding: '10px 5px',
         },
      },
   },
   {
      id: 7,
      dimensions: {
         img_dimensions: {
            top: {
               top: '65%',
               left: '41%',
               height: '122%',
               width: '34%',
            },
            middle: {
               top: '61%',
               left: '31%',
               height: '147%',
               width: '100%',
            },
            bottom: {
               top: '56%',
               left: '50%',
               height: 'auto',
               width: '100%',
            },
         },
         card_dimensions: {
            width: '500px',
            height: '400px',
         },
         cta_button: {
            borderRadius: '4px',
         },
      },
      flexbox: {
         ImageWrapper: {
            width: '100%',
            height: '60%',
         },
         BxlLogo: {
            height: '33px',
            flexDirection: 'row',
            alignItems: 'normal',
            margin: '10px 0px 10px 0px',
            mediaQuery: {
               firefox: {
                  height: '33px',
                  width: '8em',
                  alignItems: 'normal',
                  flexDirection: 'row',
                  margin: '15px 0px',
               },
            },
         },
         CondTxtFlex: {
            gap: '5px',
            margin: '20px 0px 15px 0px',
         },
         CondLogoBtnFlex: {
            width: '95%',
            flexDirection: 'row',
            justifyContent: 'space-between',
         },
      },
      fonts: {
         title: {
            size: '21px',
            weight: '700',
            alignSelf: 'center',
         },
         subTitle: {
            size: '15px',
            margin: '3px 0px 0px 5px',
            weight: '700',
            alignSelf: 'center',
         },
         firstDes: {
            size: '14px',
            weight: '500',
            alignSelf: 'center',
         },
         secondDes: {
            size: '13px',
            weight: '500',
            alignSelf: 'center',
         },
         country: {
            size: '22px',
            position: 'relative',
            bottom: '2px',
            weight: '700',
            margin: '0px 5px',
         },
         cta: {
            size: '16px',
            weight: '700',
            alignSelf: 'center',
            padding: '10px 10px',
         },
      },
   },
   {
      id: 8,
      dimensions: {
         img_dimensions: {
            top: {
               top: '61%',
               left: '42%',
               height: '118%',
               width: '36%',
            },
            middle: {
               top: '63%',
               left: '31%',
               height: '145%',
               width: '88%',
            },
            bottom: {
               top: '52%',
               left: '51%',
               height: '132%',
               width: '102%',
            },
         },
         card_dimensions: {
            width: '640px',
            height: '480px',
         },
         cta_button: {
            borderRadius: '4px',
         },
      },
      flexbox: {
         ImageWrapper: {
            width: '100%',
            height: '65%',
         },
         BxlLogo: {
            height: '33px',
            flexDirection: 'row',
            alignItems: 'normal',
            margin: '10px 0px 10px 0px',
            mediaQuery: {
               firefox: {
                  height: '33px',
                  width: '8em',
                  alignItems: 'normal',
                  flexDirection: 'row',
                  margin: '15px 0px',
               },
            },
         },
         CondTxtFlex: {
            width: '92%',
            alignItems: 'flex-start',
            gap: '4px',
            margin: '20px 0px 15px 0px',
         },
         CondLogoBtnFlex: {
            width: '95%',
            flexDirection: 'row',
            justifyContent: 'space-between',
         },
      },
      fonts: {
         title: {
            size: '24px',
            weight: '700',
            alignSelf: 'center',
         },
         subTitle: {
            size: '18px',
            margin: '3px 0px 0px 5px',
            weight: '700',
            alignSelf: 'center',
         },
         firstDes: {
            size: '15px',
            weight: '500',
            alignSelf: 'center',
         },
         secondDes: {
            size: '15px',
            weight: '500',
            alignSelf: 'center',
         },
         country: {
            size: '22px',
            position: 'relative',
            bottom: '2px',
            weight: '700',
            margin: '0px 5px',
         },
         cta: {
            size: '16px',
            weight: '700',
            alignSelf: 'center',
            margin: '0px 0px',
            padding: '10px 15px',
         },
      },
   },
   {
      id: 9,
      dimensions: {
         img_dimensions: {
            top: {
               top: '56%',
               left: '41%',
               height: '84%',
               width: '34%',
            },
            middle: {
               top: '58%',
               left: '25%',
               height: '101%',
               width: '82%',
            },
            bottom: {
               width: '100%',
               height: '',
            },
         },
         card_dimensions: {
            width: '970px',
            height: '250px',
         },
         logo: {
            width: '10em',
            height: '38px',
         },
         cta_button: {
            borderRadius: '5px',
         },
      },
      flexbox: {
         ImageWrapper: {
            width: '65%',
            height: '330px',
         },
         BxlLogo: {
            height: '33px',
            flexDirection: 'row',
            alignItems: 'normal',
            margin: '10px 0px 10px 0px',
            mediaQuery: {
               firefox: {
                  height: '33px',
                  width: '8em',
                  alignItems: 'normal',
                  flexDirection: 'row',
                  margin: '15px 0px',
               },
            },
         },
         StyledCard: {
            flexDirection: 'row',
         },
         CondBottomFlex: {},
         CondTitleFlex: {
            alignItems: 'flex-start',
            width: '100%',
            margin: '20px 0px 30px 50px',
         },
         CondDesFlex: {
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
            flexDirection: 'row',
            width: '100%',
            margin: '0px 0px 20px 50px',
         },
         CondLogoBtnFlex: {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-around',
            margin: '0px 0px 4px 0px',
            gap: '15%',
         },
      },
      fonts: {
         title: {
            size: '30px',
         },
         subTitle: {
            size: '22px',
         },
         firstDes: {
            size: '20px',
            weight: '500',
         },
         secondDes: {
            flexBasis: '100%',
            align: 'left',
            size: '20px',
            weight: '500',
         },
         country: { size: '26px', weight: '700', margin: '0px 0px 0px 5px' },
         cta: {
            padding: '8px 11px',
         },
      },
   },
   {
      id: 10,
      dimensions: {
         img_dimensions: {
            top: {
               top: '58%',
               left: '41%',
               height: '75%',
               width: '35%',
            },
            middle: {
               top: '56%',
               left: '31%',
               height: '93%',
               width: '95%',
            },
            bottom: {
               top: '52%',
               left: '50%',
               height: '85%',
               width: '100%',
            },
         },
         card_dimensions: {
            width: '840px',
            height: '250px',
         },
         logo: {
            width: '10em',
            height: '40px',
         },
         cta_button: {
            borderRadius: '5px',
         },
      },
      flexbox: {
         ImageWrapper: {
            width: '65%',
            height: '330px',
         },
         BxlLogo: {
            height: '35px',
            flexDirection: 'row',
            alignItems: 'normal',
            margin: '10px 0px 10px 0px',

            mediaQuery: {
               firefox: {
                  height: '35px',
                  width: '8em',
                  alignItems: 'normal',
                  flexDirection: 'row',
                  margin: '15px 0px',
               },
            },
         },
         StyledCard: {
            flexDirection: 'row',
         },
         CondBottomFlex: {},
         CondTitleFlex: {
            alignItems: 'flex-start',
            width: '100%',
            margin: '30px 0px 20px 50px',
         },
         CondDesFlex: {
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
            flexDirection: 'row',
            width: '100%',
            margin: '0px 0px 10px 50px',
         },
         CondLogoBtnFlex: {
            width: '100%',
            gap: '9%',
            flexDirection: 'row',
            justifyContent: 'space-around',
            margin: '0px 30px 10px 0px',
         },
      },
      fonts: {
         title: {
            size: '28px',
         },
         subTitle: {
            size: '20px',
         },
         firstDes: {
            size: '20px',
            weight: '500',
         },
         secondDes: {
            flexBasis: '100%',
            align: 'left',
            size: '20px',
            weight: '500',
         },
         country: { size: '26px', weight: '700', margin: '0px 0px 0px 5px' },
         cta: {
            padding: '8px 8px',
         },
      },
   },
   {
      id: 11,
      dimensions: {
         img_dimensions: {
            top: {
               top: '54%',
               left: '41%',
               height: '53%',
               width: '34%',
            },
            middle: {
               top: '59%',
               left: '28%',
               height: '69%',
               width: '91%',
            },
            bottom: {
               top: '50%',
               left: '50%',
               height: '60%',
               width: '100%',
            },
         },
         card_dimensions: {
            width: '840px',
            height: '150px',
         },
         cta_button: {
            margin: '0px',
            borderRadius: '4px',
         },
      },
      flexbox: {
         ImageWrapper: {
            width: '39%',
            height: '330px',
         },
         BxlLogo: {
            height: '31px',
            flexDirection: 'row',
            alignItems: 'normal',
            margin: '0px 0px 40px 0px',

            mediaQuery: {
               firefox: {
                  height: '31px',
                  width: '7em',
                  alignItems: 'normal',
                  flexDirection: 'row',
                  margin: '8px 0px',
               },
            },
         },
         StyledCard: {
            flexDirection: 'row',
         },
         CondBottomFlex: {
            flexDirection: 'row',
            margin: '0px 0px 0px 30px',
            width: '65%',
         },
         CondTitleFlex: {
            alignItems: 'flex-start',
            width: '100%',
         },
         CondDesFlex: {
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
            flexDirection: 'row',
            width: '100%',
         },
         CondLogoBtnFlex: {
            width: '35%',
            gap: '1em',
            flexDirection: 'column-reverse',
            justifyContent: 'space-around',
            margin: '0px 20px 0px 0px',
         },
      },
      fonts: {
         title: {
            size: '25px',
         },
         subTitle: {
            size: '20px',
         },
         firstDes: {
            size: '16px',
            weight: '500',
         },
         secondDes: {
            flexBasis: '100%',
            align: 'left',
            size: '16px',
            weight: '500',
         },
         country: { size: '24px', weight: '700', margin: '0px 0px 0px 5px' },
         cta: {
            width: '100%',
            size: '13px',
            whiteSpace: 'nowrap',
            padding: '7px 5px',
         },
      },
   },
   {
      id: 12,
      dimensions: {
         img_dimensions: {
            top: {
               top: '56%',
               left: '42%',
               height: '50%',
               width: '35%',
            },
            middle: {
               top: '59%',
               left: '32%',
               height: '62%',
               width: '91%',
            },
            bottom: {
               top: '53%',
               left: '51%',
               height: '57%',
               width: '102%',
            },
         },
         card_dimensions: {
            width: '995px',
            height: '123px',
         },
         cta_button: {
            borderRadius: '3px',
         },
      },
      flexbox: {
         ImageWrapper: {
            width: '30%',
            height: '330px',
         },
         BxlLogo: {
            height: '30px',
            flexDirection: 'row',
            alignItems: 'normal',
            margin: '10px 0px 10px 0px',
            mediaQuery: {
               firefox: {
                  height: '30px',
                  width: '5em',
                  alignItems: 'normal',
                  flexDirection: 'row',
                  margin: '15px 0px',
               },
            },
         },
         StyledCard: {
            flexDirection: 'row',
         },
         CondBottomFlex: {
            flexDirection: 'row',
            width: '71%',
            margin: '0px 0px 5px 30px',
         },
         CondTitleFlex: {
            alignItems: 'flex-start',
            flexDirection: 'row',
            flexWrap: 'wrap',
            margin: '0px 0px 5px 0px',
            width: '100%',
         },
         CondDesFlex: {
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
            flexDirection: 'row',
            width: '100%',
         },
         CondLogoBtnFlex: {
            width: '30%',
            flexDirection: 'column-reverse',
         },
      },
      fonts: {
         title: {
            size: '19px',
         },
         subTitle: {
            size: '16px',
            margin: '0px 0px 0px 4px',
            alignSelf: 'center',
         },
         firstDes: {
            size: '16px',
            weight: '500',
         },
         secondDes: {
            flexBasis: '100%',
            align: 'left',
            size: '16px',
            weight: '500',
         },
         country: { size: '21px', weight: '700', margin: '0px 0px 0px 5px' },
         cta: {
            size: '13px',
            padding: '6px 8px',
         },
      },
   },
   {
      id: 13,
      dimensions: {
         img_dimensions: {
            top: {
               top: '55%',
               left: '41%',
               height: '39%',
               width: '35%',
            },
            middle: {
               top: '52%',
               left: '31%',
               height: '37%',
               width: '85%',
            },
            bottom: {
               top: '52%',
               left: '50%',
               height: '45%',
               width: '100%',
            },
         },
         card_dimensions: {
            width: '728px',
            height: '90px',
         },
      },
      flexbox: {
         ImageWrapper: {
            width: '30%',
            height: '330px',
         },
         BxlLogo: {
            height: '23px',
            width: '5em',
            alignItems: 'normal',
            flexDirection: 'row',
            margin: '10px 0px 0px 0px',
            mediaQuery: {
               firefox: {
                  height: '23px',
                  width: '5em',
                  alignItems: 'normal',
                  flexDirection: 'row',
                  margin: '10px 0px 0px 0px',
               },
            },
         },
         StyledCard: {
            flexDirection: 'row',
         },
         CondBottomFlex: {
            flexDirection: 'row',
         },
         CondTitleFlex: {
            alignItems: 'flex-start',
            flexDirection: 'row',
            margin: '20px 0px 5px 30px',
            width: '100%',
         },
         CondDesFlex: {
            flexWrap: 'wrap',
            flexDirection: 'row',
            width: '105%',
            margin: '0px 0px 20px 50px',
         },
         CondLogoBtnFlex: {
            width: '30%',
            flexDirection: 'column-reverse',
         },
      },
      fonts: {
         title: {
            size: '15px',
         },
         subTitle: {
            size: '13px',
         },
         firstDes: {
            size: '11px',
            weight: '500',
         },
         secondDes: {
            size: '11px',
            flexBasis: '100%',
            align: 'left',
            weight: '500',
         },
         country: {
            size: '15px',
            weight: '700',
            margin: '0px 0px 0px 3px',
            position: 'relative',
            bottom: '2px',
         },
         cta: {
            whiteSpace: 'nowrap',
            size: '12px',
            padding: '7px 5px',
         },
      },
   },
]
