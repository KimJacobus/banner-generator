import { themeObject } from '../types/cardProps'

const colors = {
   primaryRed: '#c4221d',
   secondaryWhite: '#FFFFFF',
   tertiaryGrey: '#3E3E3D',
}

export const themesObject: themeObject[] = [
   {
      id: 0,
      name: 'tanger',
      themeColor: {
         titleColor: colors.primaryRed,
         descriptionColor: colors.tertiaryGrey,
         cardColor: colors.secondaryWhite,
         hoverButtonColor: '',
         ctaColor: colors.secondaryWhite,
         ctaButtonColor: colors.primaryRed,
         backgroundColor: '#868e96',
      },
   },
   {
      id: 1,
      name: 'bangkok',
      themeColor: {
         titleColor: colors.primaryRed,
         descriptionColor: colors.tertiaryGrey,
         cardBackgroundColor: '#ffbe6f',
         cardColor: colors.secondaryWhite,
         hoverButtonColor: '',
         ctaColor: colors.secondaryWhite,
         ctaButtonColor: '#ffbe6f',
         backgroundColor: '#FFBE6F',
      },
   },
   {
      id: 2,
      name: 'belgrade',
      themeColor: {
         titleColor: colors.primaryRed,
         descriptionColor: colors.tertiaryGrey,
         cardBackgroundColor: '#8b2323',
         cardColor: colors.secondaryWhite,
         hoverButtonColor: '',
         ctaColor: colors.secondaryWhite,
         ctaButtonColor: '#8b2323',
         backgroundColor: '#8b2323',
      },
   },
]

export const defaultInputObj = [
   {
      id: 0,
      lang: 'nl',
      title: 'Het zonnetje op je snoet...',
      customCountry: 'Griekenland',
      subTitle: 'doet ons allemaal stralen',
      description: `Volg je hart en vlieg naar <country> vanaf Brussels Airport`,
      cta: 'Tijd voor vakantie',
      JSONUrl: '',
   },
   {
      id: 1,
      lang: 'fr',
      title: 'Le soleil sur ton visage...',
      customCountry: 'Grèce',
      subTitle: 'nous fait tous briller',
      description: `Suis ton coeur et envole-toi vers <country> depuis l'aéroport de Bruxelles`,
      cta: 'il eest temps pour des vacances',
      JSONUrl: '',
   },
   {
      id: 2,
      lang: 'en',
      title: 'The sunshine on your face...',
      customCountry: 'Greece',
      subTitle: 'makes us all shine',
      description: `Follow your heart and fly to <country> from Brussels Airport`,
      cta: 'Tijd for a vacation',
      JSONUrl: '',
   },
]

export const defaultImageObj = {
   topLayer: '/src/assets/defaultImages/mask-sunseekers.png',
   middleLayer: '/src/assets/defaultImages/thicker-Stroke-3.png',
   bottomLayer: '/src/assets/defaultImages/sunseekers-turkije.png',
}
