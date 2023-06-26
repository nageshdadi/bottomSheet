import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from 'react-native';
import React, {Component} from 'react';

import Icons from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import RBSheet from 'react-native-raw-bottom-sheet';
const countryList = [{name: 'India', code: 'IN'}];

const indiaStaesAndDist = [
  {
    state: 'Andhra Pradesh',
    districts: [
      'Anantapur',
      'Chittoor',
      'East Godavari',
      'Guntur',
      'Krishna',
      'Kurnool',
      'Nellore',
      'Prakasam',
      'Srikakulam',
      'Visakhapatnam',
      'Vizianagaram',
      'West Godavari',
      'YSR Kadapa',
    ],
  },
  {
    state: 'Arunachal Pradesh',
    districts: [
      'Tawang',
      'West Kameng',
      'East Kameng',
      'Papum Pare',
      'Kurung Kumey',
      'Kra Daadi',
      'Lower Subansiri',
      'Upper Subansiri',
      'West Siang',
      'East Siang',
      'Siang',
      'Upper Siang',
      'Lower Siang',
      'Lower Dibang Valley',
      'Dibang Valley',
      'Anjaw',
      'Lohit',
      'Namsai',
      'Changlang',
      'Tirap',
      'Longding',
    ],
  },
  {
    state: 'Assam',
    districts: [
      'Baksa',
      'Barpeta',
      'Biswanath',
      'Bongaigaon',
      'Cachar',
      'Charaideo',
      'Chirang',
      'Darrang',
      'Dhemaji',
      'Dhubri',
      'Dibrugarh',
      'Goalpara',
      'Golaghat',
      'Hailakandi',
      'Hojai',
      'Jorhat',
      'Kamrup Metropolitan',
      'Kamrup',
      'Karbi Anglong',
      'Karimganj',
      'Kokrajhar',
      'Lakhimpur',
      'Majuli',
      'Morigaon',
      'Nagaon',
      'Nalbari',
      'Dima Hasao',
      'Sivasagar',
      'Sonitpur',
      'South Salmara-Mankachar',
      'Tinsukia',
      'Udalguri',
      'West Karbi Anglong',
    ],
  },
  {
    state: 'Bihar',
    districts: [
      'Araria',
      'Arwal',
      'Aurangabad',
      'Banka',
      'Begusarai',
      'Bhagalpur',
      'Bhojpur',
      'Buxar',
      'Darbhanga',
      'East Champaran (Motihari)',
      'Gaya',
      'Gopalganj',
      'Jamui',
      'Jehanabad',
      'Kaimur (Bhabua)',
      'Katihar',
      'Khagaria',
      'Kishanganj',
      'Lakhisarai',
      'Madhepura',
      'Madhubani',
      'Munger (Monghyr)',
      'Muzaffarpur',
      'Nalanda',
      'Nawada',
      'Patna',
      'Purnia (Purnea)',
      'Rohtas',
      'Saharsa',
      'Samastipur',
      'Saran',
      'Sheikhpura',
      'Sheohar',
      'Sitamarhi',
      'Siwan',
      'Supaul',
      'Vaishali',
      'West Champaran',
    ],
  },
  {
    state: 'Chandigarh (UT)',
    districts: ['Chandigarh'],
  },
  {
    state: 'Chhattisgarh',
    districts: [
      'Balod',
      'Baloda Bazar',
      'Balrampur',
      'Bastar',
      'Bemetara',
      'Bijapur',
      'Bilaspur',
      'Dantewada (South Bastar)',
      'Dhamtari',
      'Durg',
      'Gariyaband',
      'Janjgir-Champa',
      'Jashpur',
      'Kabirdham (Kawardha)',
      'Kanker (North Bastar)',
      'Kondagaon',
      'Korba',
      'Korea (Koriya)',
      'Mahasamund',
      'Mungeli',
      'Narayanpur',
      'Raigarh',
      'Raipur',
      'Rajnandgaon',
      'Sukma',
      'Surajpur  ',
      'Surguja',
    ],
  },
  {
    state: 'Dadra and Nagar Haveli (UT)',
    districts: ['Dadra & Nagar Haveli'],
  },
  {
    state: 'Daman and Diu (UT)',
    districts: ['Daman', 'Diu'],
  },
  {
    state: 'Delhi (NCT)',
    districts: [
      'Central Delhi',
      'East Delhi',
      'New Delhi',
      'North Delhi',
      'North East  Delhi',
      'North West  Delhi',
      'Shahdara',
      'South Delhi',
      'South East Delhi',
      'South West  Delhi',
      'West Delhi',
    ],
  },
  {
    state: 'Goa',
    districts: ['North Goa', 'South Goa'],
  },
  {
    state: 'Gujarat',
    districts: [
      'Ahmedabad',
      'Amreli',
      'Anand',
      'Aravalli',
      'Banaskantha (Palanpur)',
      'Bharuch',
      'Bhavnagar',
      'Botad',
      'Chhota Udepur',
      'Dahod',
      'Dangs (Ahwa)',
      'Devbhoomi Dwarka',
      'Gandhinagar',
      'Gir Somnath',
      'Jamnagar',
      'Junagadh',
      'Kachchh',
      'Kheda (Nadiad)',
      'Mahisagar',
      'Mehsana',
      'Morbi',
      'Narmada (Rajpipla)',
      'Navsari',
      'Panchmahal (Godhra)',
      'Patan',
      'Porbandar',
      'Rajkot',
      'Sabarkantha (Himmatnagar)',
      'Surat',
      'Surendranagar',
      'Tapi (Vyara)',
      'Vadodara',
      'Valsad',
    ],
  },
  {
    state: 'Haryana',
    districts: [
      'Ambala',
      'Bhiwani',
      'Charkhi Dadri',
      'Faridabad',
      'Fatehabad',
      'Gurgaon',
      'Hisar',
      'Jhajjar',
      'Jind',
      'Kaithal',
      'Karnal',
      'Kurukshetra',
      'Mahendragarh',
      'Mewat',
      'Palwal',
      'Panchkula',
      'Panipat',
      'Rewari',
      'Rohtak',
      'Sirsa',
      'Sonipat',
      'Yamunanagar',
    ],
  },
  {
    state: 'Himachal Pradesh',
    districts: [
      'Bilaspur',
      'Chamba',
      'Hamirpur',
      'Kangra',
      'Kinnaur',
      'Kullu',
      'Lahaul &amp; Spiti',
      'Mandi',
      'Shimla',
      'Sirmaur (Sirmour)',
      'Solan',
      'Una',
    ],
  },
  {
    state: 'Jammu and Kashmir',
    districts: [
      'Anantnag',
      'Bandipore',
      'Baramulla',
      'Budgam',
      'Doda',
      'Ganderbal',
      'Jammu',
      'Kargil',
      'Kathua',
      'Kishtwar',
      'Kulgam',
      'Kupwara',
      'Leh',
      'Poonch',
      'Pulwama',
      'Rajouri',
      'Ramban',
      'Reasi',
      'Samba',
      'Shopian',
      'Srinagar',
      'Udhampur',
    ],
  },
  {
    state: 'Jharkhand',
    districts: [
      'Bokaro',
      'Chatra',
      'Deoghar',
      'Dhanbad',
      'Dumka',
      'East Singhbhum',
      'Garhwa',
      'Giridih',
      'Godda',
      'Gumla',
      'Hazaribag',
      'Jamtara',
      'Khunti',
      'Koderma',
      'Latehar',
      'Lohardaga',
      'Pakur',
      'Palamu',
      'Ramgarh',
      'Ranchi',
      'Sahibganj',
      'Seraikela-Kharsawan',
      'Simdega',
      'West Singhbhum',
    ],
  },
  {
    state: 'Karnataka',
    districts: [
      'Bagalkot',
      'Ballari (Bellary)',
      'Belagavi (Belgaum)',
      'Bengaluru (Bangalore) Rural',
      'Bengaluru (Bangalore) Urban',
      'Bidar',
      'Chamarajanagar',
      'Chikballapur',
      'Chikkamagaluru (Chikmagalur)',
      'Chitradurga',
      'Dakshina Kannada',
      'Davangere',
      'Dharwad',
      'Gadag',
      'Hassan',
      'Haveri',
      'Kalaburagi (Gulbarga)',
      'Kodagu',
      'Kolar',
      'Koppal',
      'Mandya',
      'Mysuru (Mysore)',
      'Raichur',
      'Ramanagara',
      'Shivamogga (Shimoga)',
      'Tumakuru (Tumkur)',
      'Udupi',
      'Uttara Kannada (Karwar)',
      'Vijayapura (Bijapur)',
      'Yadgir',
    ],
  },
  {
    state: 'Kerala',
    districts: [
      'Alappuzha',
      'Ernakulam',
      'Idukki',
      'Kannur',
      'Kasaragod',
      'Kollam',
      'Kottayam',
      'Kozhikode',
      'Malappuram',
      'Palakkad',
      'Pathanamthitta',
      'Thiruvananthapuram',
      'Thrissur',
      'Wayanad',
    ],
  },
  {
    state: 'Lakshadweep (UT)',
    districts: [
      'Agatti',
      'Amini',
      'Androth',
      'Bithra',
      'Chethlath',
      'Kavaratti',
      'Kadmath',
      'Kalpeni',
      'Kilthan',
      'Minicoy',
    ],
  },
  {
    state: 'Madhya Pradesh',
    districts: [
      'Agar Malwa',
      'Alirajpur',
      'Anuppur',
      'Ashoknagar',
      'Balaghat',
      'Barwani',
      'Betul',
      'Bhind',
      'Bhopal',
      'Burhanpur',
      'Chhatarpur',
      'Chhindwara',
      'Damoh',
      'Datia',
      'Dewas',
      'Dhar',
      'Dindori',
      'Guna',
      'Gwalior',
      'Harda',
      'Hoshangabad',
      'Indore',
      'Jabalpur',
      'Jhabua',
      'Katni',
      'Khandwa',
      'Khargone',
      'Mandla',
      'Mandsaur',
      'Morena',
      'Narsinghpur',
      'Neemuch',
      'Panna',
      'Raisen',
      'Rajgarh',
      'Ratlam',
      'Rewa',
      'Sagar',
      'Satna',
      'Sehore',
      'Seoni',
      'Shahdol',
      'Shajapur',
      'Sheopur',
      'Shivpuri',
      'Sidhi',
      'Singrauli',
      'Tikamgarh',
      'Ujjain',
      'Umaria',
      'Vidisha',
    ],
  },
  {
    state: 'Maharashtra',
    districts: [
      'Ahmednagar',
      'Akola',
      'Amravati',
      'Aurangabad',
      'Beed',
      'Bhandara',
      'Buldhana',
      'Chandrapur',
      'Dhule',
      'Gadchiroli',
      'Gondia',
      'Hingoli',
      'Jalgaon',
      'Jalna',
      'Kolhapur',
      'Latur',
      'Mumbai City',
      'Mumbai Suburban',
      'Nagpur',
      'Nanded',
      'Nandurbar',
      'Nashik',
      'Osmanabad',
      'Palghar',
      'Parbhani',
      'Pune',
      'Raigad',
      'Ratnagiri',
      'Sangli',
      'Satara',
      'Sindhudurg',
      'Solapur',
      'Thane',
      'Wardha',
      'Washim',
      'Yavatmal',
    ],
  },
  {
    state: 'Manipur',
    districts: [
      'Bishnupur',
      'Chandel',
      'Churachandpur',
      'Imphal East',
      'Imphal West',
      'Jiribam',
      'Kakching',
      'Kamjong',
      'Kangpokpi',
      'Noney',
      'Pherzawl',
      'Senapati',
      'Tamenglong',
      'Tengnoupal',
      'Thoubal',
      'Ukhrul',
    ],
  },
  {
    state: 'Meghalaya',
    districts: [
      'East Garo Hills',
      'East Jaintia Hills',
      'East Khasi Hills',
      'North Garo Hills',
      'Ri Bhoi',
      'South Garo Hills',
      'South West Garo Hills ',
      'South West Khasi Hills',
      'West Garo Hills',
      'West Jaintia Hills',
      'West Khasi Hills',
    ],
  },
  {
    state: 'Mizoram',
    districts: [
      'Aizawl',
      'Champhai',
      'Kolasib',
      'Lawngtlai',
      'Lunglei',
      'Mamit',
      'Saiha',
      'Serchhip',
    ],
  },
  {
    state: 'Nagaland',
    districts: [
      'Dimapur',
      'Kiphire',
      'Kohima',
      'Longleng',
      'Mokokchung',
      'Mon',
      'Peren',
      'Phek',
      'Tuensang',
      'Wokha',
      'Zunheboto',
    ],
  },
  {
    state: 'Odisha',
    districts: [
      'Angul',
      'Balangir',
      'Balasore',
      'Bargarh',
      'Bhadrak',
      'Boudh',
      'Cuttack',
      'Deogarh',
      'Dhenkanal',
      'Gajapati',
      'Ganjam',
      'Jagatsinghapur',
      'Jajpur',
      'Jharsuguda',
      'Kalahandi',
      'Kandhamal',
      'Kendrapara',
      'Kendujhar (Keonjhar)',
      'Khordha',
      'Koraput',
      'Malkangiri',
      'Mayurbhanj',
      'Nabarangpur',
      'Nayagarh',
      'Nuapada',
      'Puri',
      'Rayagada',
      'Sambalpur',
      'Sonepur',
      'Sundargarh',
    ],
  },
  {
    state: 'Puducherry (UT)',
    districts: ['Karaikal', 'Mahe', 'Pondicherry', 'Yanam'],
  },
  {
    state: 'Punjab',
    districts: [
      'Amritsar',
      'Barnala',
      'Bathinda',
      'Faridkot',
      'Fatehgarh Sahib',
      'Fazilka',
      'Ferozepur',
      'Gurdaspur',
      'Hoshiarpur',
      'Jalandhar',
      'Kapurthala',
      'Ludhiana',
      'Mansa',
      'Moga',
      'Muktsar',
      'Nawanshahr (Shahid Bhagat Singh Nagar)',
      'Pathankot',
      'Patiala',
      'Rupnagar',
      'Sahibzada Ajit Singh Nagar (Mohali)',
      'Sangrur',
      'Tarn Taran',
    ],
  },
  {
    state: 'Rajasthan',
    districts: [
      'Ajmer',
      'Alwar',
      'Banswara',
      'Baran',
      'Barmer',
      'Bharatpur',
      'Bhilwara',
      'Bikaner',
      'Bundi',
      'Chittorgarh',
      'Churu',
      'Dausa',
      'Dholpur',
      'Dungarpur',
      'Hanumangarh',
      'Jaipur',
      'Jaisalmer',
      'Jalore',
      'Jhalawar',
      'Jhunjhunu',
      'Jodhpur',
      'Karauli',
      'Kota',
      'Nagaur',
      'Pali',
      'Pratapgarh',
      'Rajsamand',
      'Sawai Madhopur',
      'Sikar',
      'Sirohi',
      'Sri Ganganagar',
      'Tonk',
      'Udaipur',
    ],
  },
  {
    state: 'Sikkim',
    districts: ['East Sikkim', 'North Sikkim', 'South Sikkim', 'West Sikkim'],
  },
  {
    state: 'Tamil Nadu',
    districts: [
      'Ariyalur',
      'Chennai',
      'Coimbatore',
      'Cuddalore',
      'Dharmapuri',
      'Dindigul',
      'Erode',
      'Kanchipuram',
      'Kanyakumari',
      'Karur',
      'Krishnagiri',
      'Madurai',
      'Nagapattinam',
      'Namakkal',
      'Nilgiris',
      'Perambalur',
      'Pudukkottai',
      'Ramanathapuram',
      'Salem',
      'Sivaganga',
      'Thanjavur',
      'Theni',
      'Thoothukudi (Tuticorin)',
      'Tiruchirappalli',
      'Tirunelveli',
      'Tiruppur',
      'Tiruvallur',
      'Tiruvannamalai',
      'Tiruvarur',
      'Vellore',
      'Viluppuram',
      'Virudhunagar',
    ],
  },
  {
    state: 'Telangana',
    districts: [
      'Adilabad',
      'Bhadradri Kothagudem',
      'Hyderabad',
      'Jagtial',
      'Jangaon',
      'Jayashankar Bhoopalpally',
      'Jogulamba Gadwal',
      'Kamareddy',
      'Karimnagar',
      'Khammam',
      'Komaram Bheem Asifabad',
      'Mahabubabad',
      'Mahabubnagar',
      'Mancherial',
      'Medak',
      'Medchal',
      'Nagarkurnool',
      'Nalgonda',
      'Nirmal',
      'Nizamabad',
      'Peddapalli',
      'Rajanna Sircilla',
      'Rangareddy',
      'Sangareddy',
      'Siddipet',
      'Suryapet',
      'Vikarabad',
      'Wanaparthy',
      'Warangal (Rural)',
      'Warangal (Urban)',
      'Yadadri Bhuvanagiri',
    ],
  },
  {
    state: 'Tripura',
    districts: [
      'Dhalai',
      'Gomati',
      'Khowai',
      'North Tripura',
      'Sepahijala',
      'South Tripura',
      'Unakoti',
      'West Tripura',
    ],
  },
  {
    state: 'Uttarakhand',
    districts: [
      'Almora',
      'Bageshwar',
      'Chamoli',
      'Champawat',
      'Dehradun',
      'Haridwar',
      'Nainital',
      'Pauri Garhwal',
      'Pithoragarh',
      'Rudraprayag',
      'Tehri Garhwal',
      'Udham Singh Nagar',
      'Uttarkashi',
    ],
  },
  {
    state: 'Uttar Pradesh',
    districts: [
      'Agra',
      'Aligarh',
      'Allahabad',
      'Ambedkar Nagar',
      'Amethi (Chatrapati Sahuji Mahraj Nagar)',
      'Amroha (J.P. Nagar)',
      'Auraiya',
      'Azamgarh',
      'Baghpat',
      'Bahraich',
      'Ballia',
      'Balrampur',
      'Banda',
      'Barabanki',
      'Bareilly',
      'Basti',
      'Bhadohi',
      'Bijnor',
      'Budaun',
      'Bulandshahr',
      'Chandauli',
      'Chitrakoot',
      'Deoria',
      'Etah',
      'Etawah',
      'Faizabad',
      'Farrukhabad',
      'Fatehpur',
      'Firozabad',
      'Gautam Buddha Nagar',
      'Ghaziabad',
      'Ghazipur',
      'Gonda',
      'Gorakhpur',
      'Hamirpur',
      'Hapur (Panchsheel Nagar)',
      'Hardoi',
      'Hathras',
      'Jalaun',
      'Jaunpur',
      'Jhansi',
      'Kannauj',
      'Kanpur Dehat',
      'Kanpur Nagar',
      'Kanshiram Nagar (Kasganj)',
      'Kaushambi',
      'Kushinagar (Padrauna)',
      'Lakhimpur - Kheri',
      'Lalitpur',
      'Lucknow',
      'Maharajganj',
      'Mahoba',
      'Mainpuri',
      'Mathura',
      'Mau',
      'Meerut',
      'Mirzapur',
      'Moradabad',
      'Muzaffarnagar',
      'Pilibhit',
      'Pratapgarh',
      'RaeBareli',
      'Rampur',
      'Saharanpur',
      'Sambhal (Bhim Nagar)',
      'Sant Kabir Nagar',
      'Shahjahanpur',
      'Shamali (Prabuddh Nagar)',
      'Shravasti',
      'Siddharth Nagar',
      'Sitapur',
      'Sonbhadra',
      'Sultanpur',
      'Unnao',
      'Varanasi',
    ],
  },
  {
    state: 'West Bengal',
    districts: [
      'Alipurduar',
      'Bankura',
      'Birbhum',
      'Burdwan (Bardhaman)',
      'Cooch Behar',
      'Dakshin Dinajpur (South Dinajpur)',
      'Darjeeling',
      'Hooghly',
      'Howrah',
      'Jalpaiguri',
      'Kalimpong',
      'Kolkata',
      'Malda',
      'Murshidabad',
      'Nadia',
      'North 24 Parganas',
      'Paschim Medinipur (West Medinipur)',
      'Purba Medinipur (East Medinipur)',
      'Purulia',
      'South 24 Parganas',
      'Uttar Dinajpur (North Dinajpur)',
    ],
  },
];

const apiStatusBar = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
};
interface IProps {}
interface IState {
  isCounterySelect: boolean;
  counteryName: string;
  searchCountryName: string;
  isStateSelect: boolean;
  stateName: string;
  searchStateName: string;
  isDistSelect: boolean;
  distName: string;
  searchDistName: string;
  disctData: string[];
  apiStatus: string;
  productsData: any;
  searchProductsTitle: string;
}
export class Home extends Component<IProps, IState> {
  state = {
    isCounterySelect: false,
    counteryName: 'Country',
    searchCountryName: '',
    isStateSelect: false,
    stateName: 'State',
    searchStateName: '',
    isDistSelect: false,
    distName: 'District',
    searchDistName: '',
    disctData: [''],
    apiStatus: apiStatusBar.initial,
    productsData: [{title: '', thumbnail: ''}],
    searchProductsTitle: '',
  };

  getSelectedDistData = (selectState: string) => {
    const filteredDisctData = indiaStaesAndDist.filter(
      each => each.state === selectState,
    );
    console.log(filteredDisctData[0].districts);
    this.setState({
      disctData: filteredDisctData[0].districts,
      stateName: selectState,
      isStateSelect: false,
      distName: 'District',
    });
  };

  onPressGetData = async () => {
    this.setState({apiStatus: apiStatusBar.initial});
    const response = await axios.get('https://dummyjson.com/products');
    console.log(response.data.products);
    this.setState({productsData: response.data.products});
    this.RBSheet.open();
  };
  RBSheet: any;

  render() {
    const {
      searchCountryName,
      searchDistName,
      searchStateName,
      searchProductsTitle,
    } = this.state;
    const filteredCountryName = countryList.filter(each =>
      each.name.toLowerCase().includes(searchCountryName.toLocaleLowerCase()),
    );
    const filteredStateName = indiaStaesAndDist.filter(each =>
      each.state.toLowerCase().includes(searchStateName.toLocaleLowerCase()),
    );
    const filteredDisName = this.state.disctData.filter(each =>
      each.toLowerCase().includes(searchDistName.toLocaleLowerCase()),
    );
    const filteredProuctsData = this.state.productsData.filter(each =>
      each.title
        .toLowerCase()
        .includes(searchProductsTitle.toLocaleLowerCase()),
    );

    return (
      <SafeAreaView style={styles.mainContainer}>
        <Text style={styles.dropDoenText}>Drop Down</Text>
        <View style={styles.fullDropDounCrad}>
          <Text style={styles.labelText}>Country</Text>
          <View style={styles.dropDownCard}>
            <Text style={styles.countryText}>{this.state.counteryName}</Text>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  isCounterySelect: !this.state.isCounterySelect,
                  isStateSelect: false,
                  isDistSelect: false,
                });
              }}>
              <Icons name="down" size={20} />
            </TouchableOpacity>
          </View>
          {this.state.isCounterySelect && (
            <View>
              <View style={styles.flatCrad}>
                <View style={styles.searchCard}>
                  <Icons name="search1" size={25} />
                  <TextInput
                    style={styles.inputComponent}
                    placeholder="Search Country Name"
                    onChangeText={(newText: string) =>
                      this.setState({searchCountryName: newText.trim()})
                    }
                  />
                </View>
                <FlatList
                  data={filteredCountryName}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({item}) => {
                    return (
                      <TouchableOpacity
                        style={styles.countryCrad}
                        onPress={() => {
                          this.setState({
                            counteryName: item.name,
                            isCounterySelect: false,
                            stateName: 'State',
                            distName: 'District',
                          });
                        }}>
                        <Text style={styles.countryText}>{item.name}</Text>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
            </View>
          )}
        </View>
        {this.state.counteryName !== 'Country' && (
          <View style={styles.fullDropDounCrad}>
            <Text style={styles.labelText}>State</Text>
            <View style={styles.dropDownCard}>
              <Text style={styles.countryText}>{this.state.stateName}</Text>
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    isStateSelect: !this.state.isStateSelect,
                    isDistSelect: false,
                    isCounterySelect: false,
                  });
                }}>
                <Icons name="down" size={20} />
              </TouchableOpacity>
            </View>
            {this.state.isStateSelect && (
              <View>
                <View style={styles.flatCrad}>
                  <View style={styles.searchCard}>
                    <Icons name="search1" size={25} />
                    <TextInput
                      style={styles.inputComponent}
                      placeholder="Search State Name"
                      onChangeText={(newText: string) =>
                        this.setState({searchStateName: newText.trim()})
                      }
                    />
                  </View>
                  <FlatList
                    data={filteredStateName}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => {
                      return (
                        <TouchableOpacity
                          style={styles.countryCrad}
                          onPress={() => {
                            this.getSelectedDistData(item.state);
                          }}>
                          <Text style={styles.countryText}>{item.state}</Text>
                        </TouchableOpacity>
                      );
                    }}
                  />
                </View>
              </View>
            )}
          </View>
        )}
        {this.state.counteryName !== 'Country' &&
          this.state.stateName !== 'State' && (
            <View style={styles.fullDropDounCrad}>
              <Text style={styles.labelText}>City</Text>
              <View style={styles.dropDownCard}>
                <Text style={styles.countryText}>{this.state.distName}</Text>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({
                      isDistSelect: !this.state.isDistSelect,
                      isCounterySelect: false,
                      isStateSelect: false,
                    });
                  }}>
                  <Icons name="down" size={20} />
                </TouchableOpacity>
              </View>
              {this.state.isDistSelect && (
                <View>
                  <View style={styles.flatCrad}>
                    <View style={styles.searchCard}>
                      <Icons name="search1" size={25} />
                      <TextInput
                        style={styles.inputComponent}
                        placeholder="Search District Name"
                        onChangeText={(newText: string) =>
                          this.setState({searchDistName: newText.trim()})
                        }
                      />
                    </View>
                    <FlatList
                      data={filteredDisName}
                      keyExtractor={(item, index) => index.toString()}
                      renderItem={({item}) => {
                        return (
                          <TouchableOpacity
                            style={styles.countryCrad}
                            onPress={() => {
                              this.setState({
                                distName: item,
                                isDistSelect: false,
                              });
                            }}>
                            <Text style={styles.countryText}>{item}</Text>
                          </TouchableOpacity>
                        );
                      }}
                    />
                  </View>
                </View>
              )}
            </View>
          )}
        <TouchableOpacity
          style={styles.getDataBtn}
          onPress={this.onPressGetData}>
          <Text style={styles.getDataText}>get Data</Text>
        </TouchableOpacity>
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          closeOnDragDown={true}
          closeOnPressMask={true}
          dragFromTopOnly
          height={430}
          openDuration={250}
          customStyles={{
            container: {
              paddingLeft: 10,
              paddingTop: 10,
              justifyContent: 'center',
              alignItems: 'center',
            },
          }}>
          <View>
            <Text style={styles.productsText}>Products</Text>
            <View style={styles.searchCard}>
              <Icons name="search1" size={25} />
              <TextInput
                style={styles.inputComponent}
                placeholder="Search Country Name"
                onChangeText={(newText: string) =>
                  this.setState({searchProductsTitle: newText.trim()})
                }
              />
            </View>
            {filteredProuctsData.length === 0 ? (
              <View>
                <Text style={styles.dropDoenText}>Products Empty</Text>
              </View>
            ) : (
              <FlatList
                horizontal
                keyExtractor={(item, index) => index.toString()}
                data={filteredProuctsData}
                renderItem={({
                  item,
                }: {
                  item: {title: string; thumbnail: string};
                }) => {
                  return (
                    <View style={styles.productsCard}>
                      <Image
                        source={{uri: `${item.thumbnail}`}}
                        style={styles.trendingDataImg}
                      />
                      <View style={styles.ratingCard}>
                        <Text style={styles.titleText}>{item.title}</Text>
                        <Image
                          style={styles.startImg}
                          resizeMode="contain"
                          source={require('../images/Star.png')}
                        />
                      </View>
                    </View>
                  );
                }}
              />
            )}
          </View>
        </RBSheet>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
  },
  dropDoenText: {
    fontSize: 30,
    marginBottom: 20,
    color: '#c699f0',
    textAlign: 'center',
  },
  fullDropDounCrad: {
    width: 350,
    marginBottom: 20,
    alignSelf: 'center',
  },
  dropDownCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  searchCard: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
    backgroundColor: '#99958b',
    margin: 10,
    borderRadius: 10,
  },
  labelText: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 20,
  },
  inputComponent: {
    width: 260,
    marginLeft: 10,
  },
  countryCrad: {
    marginBottom: 10,
  },
  countryText: {
    fontSize: 20,
    color: '#5c6b60',
    marginLeft: 15,
  },
  flatCrad: {
    maxHeight: 220,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  getDataBtn: {
    alignSelf: 'center',
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#1650cc',
  },
  getDataText: {
    fontSize: 20,
    color: '#fff',
  },
  trendingDataImg: {
    height: 150,
    width: 150,
    borderRadius: 10,
  },
  bottomCrad: {
    paddingLeft: 15,
    paddingTop: 15,
  },
  productsCard: {
    marginLeft: 10,
    width: 200,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c699f0',
    marginBottom: 10,
    borderRadius: 10,
  },
  productsText: {
    fontSize: 25,
    marginBottom: 20,
    color: '#c699f0',
  },
  ratingCard: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    maxWidth: 160,
    fontSize: 18,
    textAlign: 'center',
  },
  startImg: {
    width: 70,
  },
});
export default Home;
