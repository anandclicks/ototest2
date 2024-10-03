import { createContext,useState } from "react";

export const UserContext = createContext({})
export function UserContextProvider ({children}){
  const [Navstate, setNavstate] = useState(false)
  const [Formstate, setFormstate] = useState(false)
  const AllPgDetails = [
    {
      id: 1,
      pageUrl: '/noida/oto-capital',
      pgTitle: 'OTO capital',
      pgLocation: 'Near by - OM deiry Gali number - 03',
      mapUrl: 'https://maps.app.goo.gl/19w1FBvJNUdqp7p8A',
      imageUrl: '/Allcitiesindividualpgs/otocapitalsec44/',
      singleSharingPrice: '11000',
      doubleSharingPrice: '6000',
      tripleSharingPrice: '5000',
      liveLocationUrl : 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3504.5881751808897!2d77.3521968754979!3d28.552095675708753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDMzJzA3LjUiTiA3N8KwMjEnMTcuMiJF!5e0!3m2!1sen!2sin!4v1724478682678!5m2!1sen!2sin',
      privatRoom: true,
      DoubleSharing: true,
      TripleSharing: false,
      withFood: true,
      city: 'Noida',
      nearByLandmarkOne: 'Botanical garden metro stations ',
      nearByLandmarkTwo: 'DLF mall of India ',
      nearByLandmarkThree: 'parks and workout space',
      distanceFromPgOne: '5 min Away',
      distanceFromPgTwo: '15 Min Away',
      distanceFromPgThree: '15 min',
      oldPrice: '6840.00'
    },
    {
      id: 2,
      pageUrl: '/noida/royal-town-sector45',
      pgTitle: 'OTO Royal town',
      pgLocation: 'Oto royal town sector 45 Block B',
      mapUrl: 'https://www.google.com/maps?q=28.5520957,77.3547718&z=17&hl=en',
      imageUrl: '/Allcitiesindividualpgs/otoroyaltownsec45/',
      singleSharingPrice: '16000',
      doubleSharingPrice: '8000',
      tripleSharingPrice: '7000',
      liveLocationUrl : 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3504.5881751808897!2d77.3521968754979!3d28.552095675708753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDMzJzA3LjUiTiA3N8KwMjEnMTcuMiJF!5e0!3m2!1sen!2sro!4v1724571802103!5m2!1sen!2sro',
      DoubleSharing: true,
      TripleSharing: false,
      withFood: true,
      city: 'Noida',
      nearByLandmarkOne: 'Main road',
      nearByLandmarkTwo: 'Best fitness centres',
      nearByLandmarkThree: 'Medical and market',
      distanceFromPgOne: '100MTR Away',
      distanceFromPgTwo: '50MTR Away',
      distanceFromPgThree: '50MTR Away',
      oldPrice: '9120.00'
    },
    {
      id: 3,
      pageUrl: '/noida/scout-house-sector45',
      pgTitle: 'OTO scout house',
      pgLocation: 'OTO scout house sector 45 Nearby - Amarpali gate no - 6Balgiri mandir road sadarpur Gali no - 09',
      mapUrl: 'https://maps.app.goo.gl/wVzpbFNrYUzJ2dkz6',
      imageUrl: '/Allcitiesindividualpgs/otoscouthousesec45/',
      singleSharingPrice: '18000',
      doubleSharingPrice: '10000',
      tripleSharingPrice: '8000',
      liveLocationUrl : 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3504.69701089048!2d77.34643027549771!3d28.548825475710608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDMyJzU1LjgiTiA3N8KwMjAnNTYuNCJF!5e0!3m2!1sen!2sro!4v1724572350175!5m2!1sen!2sro',
      privatRoom: true,
      DoubleSharing: true,
      TripleSharing: true,
      withFood: false,
      city: 'Noida',
      nearByLandmarkOne: 'Botanical garden metro stations ',
      nearByLandmarkTwo: 'Medical and market',
      nearByLandmarkThree: 'Atta Market Sector 18 ',
      distanceFromPgOne: '2KM Away',
      distanceFromPgTwo: '50MTR away',
      distanceFromPgThree: '3.5km Away',
      oldPrice: '11400.00'
    },
    {
      id: 4,
      pageUrl: '/noida/oto-bloom-sector45',
      pgTitle: 'OTO bloom',
      pgLocation: 'OTO bloom sector 45 Near by:- B.S. modern public school',
      mapUrl: 'https://maps.app.goo.gl/zhvXYrZLEhcYLNVy7',
      imageUrl: '/Allcitiesindividualpgs/otobloomsec45/',
      singleSharingPrice: '14000',
      doubleSharingPrice: '7000',
      tripleSharingPrice: '5000',
      liveLocationUrl : 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3504.476452114925!2d77.346345375498!3d28.55545227570694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDMzJzE5LjYiTiA3N8KwMjAnNTYuMSJF!5e0!3m2!1sen!2sro!4v1724572507997!5m2!1sen!2sro',
      privatRoom: true,
      DoubleSharing: true,
      TripleSharing: false,
      withFood: false,
      city: 'Noida',
      nearByLandmarkOne: 'Botanical garden metro stations ',
      nearByLandmarkTwo: 'Medical and market',
      nearByLandmarkThree: 'Atta Market Sector 18 ',
      distanceFromPgOne: '2KM Away',
      distanceFromPgTwo: '50MTR away',
      distanceFromPgThree: '3.5km Away',
      oldPrice: '7980.00'
    },
    {
      id: 5,
      pageUrl: '/noida/oto-omega-sector51',
      pgTitle: 'OTO Omega',
      pgLocation: 'Sector 51 noida Village - Hoshiarpur Gali no. 3',
      mapUrl: 'https://maps.app.goo.gl/9AdCfk6j1HH5yimU8',
      imageUrl: '/Allcitiesindividualpgs/Oto omega/',
      singleSharingPrice: '11000',
      doubleSharingPrice: '6000',
      tripleSharingPrice: '5000',
      liveLocationUrl : 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3503.597872593386!2d77.36480377549898!3d28.58183567569251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM0JzU0LjYiTiA3N8KwMjInMDIuNiJF!5e0!3m2!1sen!2sro!4v1724572735021!5m2!1sen!2sro',
      privatRoom: true,
      DoubleSharing: true,
      TripleSharing: false,
      withFood: false,
      city: 'Noida',
      nearByLandmarkOne: 'Best fitness centres',
      nearByLandmarkTwo: 'Shivalika hospital ',
      nearByLandmarkThree: 'Market',
      distanceFromPgOne: '50MTR Away',
      distanceFromPgTwo: '300MTR Away',
      distanceFromPgThree: '100MTR Away',
      oldPrice: '6840.00'
    },
    {
      id: 6,
      pageUrl: '/noida/oto-galaxy-sector51',
      pgTitle: 'OTO Galaxy ',
      pgLocation: 'Gali  no 19 near by yadav hostel  metro pilar  no   232 Sector 51 hoshiyar pur Noida',
      mapUrl: 'https://maps.app.goo.gl/G1sJaD6r6StSdpdz8',
      imageUrl: '/Allcitiesindividualpgs/Oto galaxy/',
      singleSharingPrice: '9000',
      doubleSharingPrice: '5000',
      tripleSharingPrice: '4000',
      liveLocationUrl : 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3503.4828011158666!2d77.36627487549906!3d28.585289575690545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM1JzA3LjAiTiA3N8KwMjInMDcuOSJF!5e0!3m2!1sen!2sro!4v1724573402137!5m2!1sen!2sro',
      privatRoom: true,
      DoubleSharing: true,
      TripleSharing: false,
      withFood: false,
      city: 'Noida',
      nearByLandmarkOne: 'Best fitness centres ',
      nearByLandmarkTwo: 'DLF mall of India ',
      nearByLandmarkThree: 'Shivalika hospital',
      distanceFromPgOne: '50MTR Away',
      distanceFromPgTwo: '7 Min Away',
      distanceFromPgThree: '100MTR Away',
      oldPrice: '5700.00'
    },
    {
      id: 7,
      pageUrl: '/noida/oto-coastal-sector62',
      pgTitle: 'OTO Coastal',
      pgLocation: 'OTO coastal sector 62 Nearby - Fr. Agnel school just Bagal gali Sidharth medical Store',
      mapUrl: 'https://www.google.com/maps?q=28.6205425,77.3535338&z=17&hl=en',
      imageUrl: '/Allcitiesindividualpgs/Oto coastal premium/',
      singleSharingPrice: '16000',
      doubleSharingPrice: '8000',
      tripleSharingPrice: '7000',
      liveLocationUrl : 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3502.307573717118!2d77.35095887550037!3d28.62054247567129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM3JzE0LjAiTiA3N8KwMjEnMTIuNyJF!5e0!3m2!1sen!2sro!4v1724573579294!5m2!1sen!2sro',
      privatRoom: true,
      DoubleSharing: true,
      TripleSharing: false,
      withFood: true,
      city: 'Noida',
      nearByLandmarkOne: 'Sector 62 matro station',
      nearByLandmarkTwo: 'Best fitness centre',
      nearByLandmarkThree: 'Agnel school ',
      distanceFromPgOne: '5 min Away',
      distanceFromPgTwo: '50MTR Away',
      distanceFromPgThree: '2 min',
      oldPrice: '9120.00'
    },
    {
      id: 8,
      pageUrl: '/noida/oto-Township-sector73',
      pgTitle: 'OTO Township ',
      pgLocation: 'Oto township sector 73 gali no 2   sarafabad nearby A square mall',
      mapUrl: 'https://www.google.com/maps?q=28.589872,77.3807466&z=17&hl=en',
      imageUrl: '/Allcitiesindividualpgs/Oto township/',
      singleSharingPrice: '12000',
      doubleSharingPrice: '6000',
      tripleSharingPrice: '5000',
      liveLocationUrl : 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3503.3301124424092!2d77.37817167549923!3d28.589871975688013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM1JzIzLjUiTiA3N8KwMjInNTAuNyJF!5e0!3m2!1sen!2sro!4v1724573779008!5m2!1sen!2sro',
      privatRoom: true,
      DoubleSharing: true,
      TripleSharing: false,
      withFood: false,
      city: 'Noida',
      nearByLandmarkOne: 'Best fitness centres ',
      nearByLandmarkTwo: 'Squire Mall',
      nearByLandmarkThree: 'Marked',
      distanceFromPgOne: '50MTR Away',
      distanceFromPgTwo: '100MTR Away',
      distanceFromPgThree: '100MTR Away',
      oldPrice: '6840.00'
    },
    {
      id: 9,
      pageUrl: '/noida/oto-crop-town-sector73',
      pgTitle: 'OTO crop town  ',
      pgLocation: 'OTO crop town sector 73 Near by:- Krishna bhawan:- DS public school',
      mapUrl: 'https://www.google.com/maps?q=28.586801,77.3832798&z=17&hl=en',
      imageUrl: '/Allcitiesindividualpgs/Oto crop twon/',
      singleSharingPrice: '8500',
      doubleSharingPrice: '4500',
      tripleSharingPrice: '3000',
      liveLocationUrl : 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3503.4324427203137!2d77.3807048754991!3d28.586800975689737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM1JzEyLjUiTiA3N8KwMjInNTkuOCJF!5e0!3m2!1sen!2sro!4v1724575195805!5m2!1sen!2sro',
      privatRoom: true,
      DoubleSharing: true,
      TripleSharing: false,
      withFood: false,
      city: 'Noida',
      nearByLandmarkOne: ' DS public school ',
      nearByLandmarkTwo: 'Metro station 51 , 52 ',
      nearByLandmarkThree: 'Best fitness centres',
      distanceFromPgOne: '50MTR Away',
      distanceFromPgTwo: '700MTR Away',
      distanceFromPgThree: '50MTR Away',
      oldPrice: '5130.00'
    },
    {
      id: 10,
      pageUrl: '/noida/oto-white-house-sector104',
      pgTitle: 'OTO white house',
      pgLocation: 'OTO white house sector 104 Nearby - sukhadam residency Hazipur Gali number - 3',
      mapUrl: 'https://maps.app.goo.gl/G5YTT9HgRwccMCjj8',
      imageUrl: '/Allcitiesindividualpgs/otowhitehousesec104/',
      singleSharingPrice: '20000',
      doubleSharingPrice: '10000',
      tripleSharingPrice: '8000',
      liveLocationUrl : 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3505.070550463856!2d77.3630964754973!3d28.537599075716738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDMyJzE1LjQiTiA3N8KwMjEnNTYuNCJF!5e0!3m2!1sen!2sro!4v1724575438584!5m2!1sen!2sro',
      privatRoom: true,
      DoubleSharing: true,
      TripleSharing: false,
      withFood: true,
      city: 'Noida',
      nearByLandmarkOne: 'City centre metro station & Botanical garden metro station ',
      nearByLandmarkTwo: 'Best fitness centre ',
      nearByLandmarkThree: 'Jaypee Hospital ',
      distanceFromPgOne: '10 min Away',
      distanceFromPgTwo: '50MTR Away',
      distanceFromPgThree: '10 min Away',
      oldPrice: '11400.00'
    },
    {
      id: 11,
      pageUrl: '/noida/oto-royal-win-sector104',
      pgTitle: 'OTO Royal win',
      pgLocation: 'OTO Royal win gali no 10 Hazipur sector 104 Noida',
      mapUrl: 'https://www.google.com/maps?q=28.5396605,77.3701956&z=17&hl=en',
      imageUrl: '/Allcitiesindividualpgs/otoroyalwinsec104/',
      singleSharingPrice: '16000',
      doubleSharingPrice: '8000',
      tripleSharingPrice: '7000',
      liveLocationUrl : 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3505.001970932349!2d77.3676206754974!3d28.53966047571549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDMyJzIyLjgiTiA3N8KwMjInMTIuNyJF!5e0!3m2!1sen!2sro!4v1724576862372!5m2!1sen!2sro',
      privatRoom: true,
      DoubleSharing: true,
      TripleSharing: false,
      withFood: false,
      city: 'Noida',
      nearByLandmarkOne: 'City centre metro station',
      nearByLandmarkTwo: 'Amity University ',
      nearByLandmarkThree: 'DLF mall of India ',
      distanceFromPgOne: '10 min Away',
      distanceFromPgTwo: '10 Min Away',
      distanceFromPgThree: '15 min',
      oldPrice: '9120.00'
    },
    {
      id: 12,
      pageUrl: '/noida/oto-royal-win2-sector104',
      pgTitle: 'OTO Royal win 2',
      pgLocation: 'OTO Royal win2 gali no 10 Hazipur sector 104 Noida',
      mapUrl: 'https://www.google.com/maps?q=28.5396605,77.3701956&z=17&hl=en',
      imageUrl: '/Allcitiesindividualpgs/OtoroyalwinTwo/',
      singleSharingPrice: '18000',
      doubleSharingPrice: '10000',
      tripleSharingPrice: '8000',
      liveLocationUrl : 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3505.001970932349!2d77.3676206754974!3d28.53966047571549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDMyJzIyLjgiTiA3N8KwMjInMTIuNyJF!5e0!3m2!1sen!2sro!4v1724577547218!5m2!1sen!2sro',
      privatRoom: true,
      DoubleSharing: true,
      TripleSharing: true,
      withFood: false,
      city: 'Noida',
      nearByLandmarkOne: 'City centre metro station ',
      nearByLandmarkTwo: 'DLF mall of India ',
      nearByLandmarkThree: 'Amity University ',
      distanceFromPgOne: '10 min Away',
      distanceFromPgTwo: '15 Min Away',
      distanceFromPgThree: '15 Min Away',
      oldPrice: '11400.00'
    },
    {
      id: 13,
      pageUrl: '/noida/oto-expo-primium-sector128',
      pgTitle: 'OTO expo primium',
      pgLocation: 'G999+5JX, shahpur, Sahaour Goberdhanpur, Goberdhanpur, Sector 128, Noida, Uttar Pradesh',
      mapUrl: 'https://www.google.com/maps?q=28.5183132,77.3694112&z=17&hl=en',
      imageUrl: '/Allcitiesindividualpgs/otoexpopremiumsec128/',
      singleSharingPrice: '12000',
      doubleSharingPrice: '6000',
      tripleSharingPrice: '5000',
      liveLocationUrl : 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3505.711942183409!2d77.36683627549664!3d28.518313175727396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDMxJzA1LjkiTiA3N8KwMjInMDkuOSJF!5e0!3m2!1sen!2sro!4v1724577745715!5m2!1sen!2sro',
      privatRoom: true,
      DoubleSharing: true,
      TripleSharing: true,
      withFood: false,
      city: 'Noida',
      nearByLandmarkOne: 'Sector 142 metro station & botanical garden metro station',
      nearByLandmarkTwo: 'Best fitness centre',
      nearByLandmarkThree: 'Jaypee Hospital ',
      distanceFromPgOne: '10 min Away',
      distanceFromPgTwo: '50MTR Away',
      distanceFromPgThree: '5 min Away',
      oldPrice: '6840.00'
    },
    {
      id: 14,
      pageUrl: '/noida/oto-expressway-sector128',
      pgTitle: 'OTO expressway',
      pgLocation: 'OTO expressway sector 128 Village - shahpur Nearby - mother dairy',
      mapUrl: 'https://www.google.com/maps?q=28.5182406,77.3672593&z=17&hl=en',
      imageUrl: '/Allcitiesindividualpgs/otoexpresswaysec128/',
      singleSharingPrice: '11000',
      doubleSharingPrice: '6000',
      tripleSharingPrice: '5000',
      liveLocationUrl : 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3505.7143558932717!2d77.36468437549665!3d28.518240575727418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDMxJzA1LjciTiA3N8KwMjInMDIuMSJF!5e0!3m2!1sen!2sro!4v1724577854473!5m2!1sen!2sro',
      privatRoom: true,
      DoubleSharing: true,
      TripleSharing: true,
      withFood: false,
      city: 'Noida',
      nearByLandmarkOne: 'Sector 142 metro station & botanical garden metro station',
      nearByLandmarkTwo: 'DLF mall of India ',
      nearByLandmarkThree: 'Best fitness centre',
      distanceFromPgOne: '10 min Away',
      distanceFromPgTwo: '15 Min Away',
      distanceFromPgThree: '50MTR Away',
      oldPrice: '6840.00'
    }
  ]
  const [pgAllData, setpgAllData] = useState(AllPgDetails)
  const highToLowDataHandle = () => {
    const filteredData = [...pgAllData].sort((a, b) => Number(b.doubleSharingPrice) - Number(a.doubleSharingPrice));
    setpgAllData(filteredData);
  };
  
  const lowToHighDataHandle = () => {
    const filteredData = [...pgAllData].sort((a, b) => Number(a.doubleSharingPrice) - Number(b.doubleSharingPrice));
    setpgAllData(filteredData);
  };
  


  const SingleSharingHandle = () => {
    const filteredData = AllPgDetails.filter(pg => pg.privatRoom);
    setpgAllData(filteredData);
  };

  const doubleSharingHandle = () => {
    const filteredData = AllPgDetails.filter(pg => pg.DoubleSharing);
    setpgAllData(filteredData);
  };

  const tripleSharingHandle = () => {
    const filteredData = AllPgDetails.filter(pg => pg.TripleSharing);
    setpgAllData(filteredData);
  };

  const handleRange = (value) => {
    const numericValue = Number(value);
    const filteredData = AllPgDetails.filter(pg => numericValue < pg.doubleSharingPrice && pg.doubleSharingPrice < 20000);
    setpgAllData(filteredData);
  };
  return (
    <UserContext.Provider value={{Navstate,setNavstate,Formstate,setFormstate,pgAllData,setpgAllData,highToLowDataHandle,lowToHighDataHandle,SingleSharingHandle,doubleSharingHandle,tripleSharingHandle,handleRange}}>
      {children}
    </UserContext.Provider>
  )
}