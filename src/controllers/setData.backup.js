export const setData = asyncHandler(async (req, res) => {
  const countries = [
    {
      name: "India",
      shortName: "IN",
    },
    {
      name: "United States",
      shortName: "US",
    },
    {
      name: "United Kingdom",
      shortName: "UK",
    },
    {
      name: "Australia",
      shortName: "AU",
    },
    {
      name: "Canada",
      shortName: "CA",
    },
  ];
  const country = await Country.insertMany(countries);
  return res
    .status(200)
    .json(
      new ApiResponse(200, { country }, "Country data inserted successfully")
    );
  // India ID = 6745c30b1974959338cf0fa4
  const states = [
    { name: "Andhra Pradesh", country: "6745c30b1974959338cf0fa4" },
    { name: "Arunachal Pradesh", country: "6745c30b1974959338cf0fa4" },
    { name: "Assam", country: "6745c30b1974959338cf0fa4" },
    { name: "Bihar", country: "6745c30b1974959338cf0fa4" },
    { name: "Chhattisgarh", country: "6745c30b1974959338cf0fa4" },
    { name: "Goa", country: "6745c30b1974959338cf0fa4" },
    { name: "Gujarat", country: "6745c30b1974959338cf0fa4" },
    { name: "Haryana", country: "6745c30b1974959338cf0fa4" },
    { name: "Himachal Pradesh", country: "6745c30b1974959338cf0fa4" },
    { name: "Jharkhand", country: "6745c30b1974959338cf0fa4" },
    { name: "Karnataka", country: "6745c30b1974959338cf0fa4" },
    { name: "Kerala", country: "6745c30b1974959338cf0fa4" },
    { name: "Madhya Pradesh", country: "6745c30b1974959338cf0fa4" },
    { name: "Maharashtra", country: "6745c30b1974959338cf0fa4" },
    { name: "Manipur", country: "6745c30b1974959338cf0fa4" },
    { name: "Meghalaya", country: "6745c30b1974959338cf0fa4" },
    { name: "Mizoram", country: "6745c30b1974959338cf0fa4" },
    { name: "Nagaland", country: "6745c30b1974959338cf0fa4" },
    { name: "Odisha", country: "6745c30b1974959338cf0fa4" },
    { name: "Punjab", country: "6745c30b1974959338cf0fa4" },
    { name: "Rajasthan", country: "6745c30b1974959338cf0fa4" },
    { name: "Sikkim", country: "6745c30b1974959338cf0fa4" },
    { name: "Tamil Nadu", country: "6745c30b1974959338cf0fa4" },
    { name: "Telangana", country: "6745c30b1974959338cf0fa4" },
    { name: "Tripura", country: "6745c30b1974959338cf0fa4" },
    { name: "Uttar Pradesh", country: "6745c30b1974959338cf0fa4" },
    { name: "Uttarakhand", country: "6745c30b1974959338cf0fa4" },
    { name: "West Bengal", country: "6745c30b1974959338cf0fa4" },
    {
      name: "Andaman and Nicobar Islands",
      country: "6745c30b1974959338cf0fa4",
    },
    { name: "Chandigarh", country: "6745c30b1974959338cf0fa4" },
    {
      name: "Dadra and Nagar Haveli and Daman and Diu",
      country: "6745c30b1974959338cf0fa4",
    },
    { name: "Lakshadweep", country: "6745c30b1974959338cf0fa4" },
    { name: "Delhi", country: "6745c30b1974959338cf0fa4" },
    { name: "Puducherry", country: "6745c30b1974959338cf0fa4" },
    { name: "Jammu and Kashmir", country: "6745c30b1974959338cf0fa4" },
    { name: "Ladakh", country: "6745c30b1974959338cf0fa4" },
  ];
  const state = await State.insertMany(states);
  return res
    .status(200)
    .json(new ApiResponse(200, { state }, "State data inserted successfully"));
  const cities = [
    {
      name: "Mumbai",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Delhi",
      state: "6745c5788ce413e54c11d66f",
    },
    {
      name: "Bengaluru",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Ahmedabad",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Hyderabad",
      state: "6745c5788ce413e54c11d666",
    },
    {
      name: "Chennai",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Kolkata",
      state: "6745c5788ce413e54c11d66a",
    },
    {
      name: "Pune",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Jaipur",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Surat",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Lucknow",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Kanpur",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Nagpur",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Patna",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Indore",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Thane",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Bhopal",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Visakhapatnam",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Vadodara",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Firozabad",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Ludhiana",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Rajkot",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Agra",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Siliguri",
      state: "6745c5788ce413e54c11d66a",
    },
    {
      name: "Nashik",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Faridabad",
      state: "6745c5788ce413e54c11d656",
    },
    {
      name: "Patiala",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Meerut",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Kalyan-Dombivali",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Vasai-Virar",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Varanasi",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Srinagar",
      state: "6745c5788ce413e54c11d671",
    },
    {
      name: "Dhanbad",
      state: "6745c5788ce413e54c11d658",
    },
    {
      name: "Jodhpur",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Amritsar",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Raipur",
      state: "6745c5788ce413e54c11d653",
    },
    {
      name: "Allahabad",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Coimbatore",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Jabalpur",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Gwalior",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Vijayawada",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Madurai",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Guwahati",
      state: "6745c5788ce413e54c11d651",
    },
    {
      name: "Chandigarh",
      state: "6745c5788ce413e54c11d66c",
    },
    {
      name: "Hubli-Dharwad",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Amroha",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Moradabad",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Gurgaon",
      state: "6745c5788ce413e54c11d656",
    },
    {
      name: "Aligarh",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Solapur",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Ranchi",
      state: "6745c5788ce413e54c11d658",
    },
    {
      name: "Jalandhar",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Tiruchirappalli",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Bhubaneswar",
      state: "6745c5788ce413e54c11d661",
    },
    {
      name: "Salem",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Warangal",
      state: "6745c5788ce413e54c11d666",
    },
    {
      name: "Mira-Bhayandar",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Thiruvananthapuram",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Bhiwandi",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Saharanpur",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Guntur",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Amravati",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Bikaner",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Noida",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Jamshedpur",
      state: "6745c5788ce413e54c11d658",
    },
    {
      name: "Bhilai Nagar",
      state: "6745c5788ce413e54c11d653",
    },
    {
      name: "Cuttack",
      state: "6745c5788ce413e54c11d661",
    },
    {
      name: "Kochi",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Udaipur",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Bhavnagar",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Dehradun",
      state: "6745c5788ce413e54c11d669",
    },
    {
      name: "Asansol",
      state: "6745c5788ce413e54c11d66a",
    },
    {
      name: "Nanded-Waghala",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Ajmer",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Jamnagar",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Ujjain",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Sangli",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Loni",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Jhansi",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Pondicherry",
      state: "6745c5788ce413e54c11d670",
    },
    {
      name: "Nellore",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Jammu",
      state: "6745c5788ce413e54c11d671",
    },
    {
      name: "Belagavi",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Raurkela",
      state: "6745c5788ce413e54c11d661",
    },
    {
      name: "Mangaluru",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Tirunelveli",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Malegaon",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Gaya",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Tiruppur",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Davanagere",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Kozhikode",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Akola",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Kurnool",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Bokaro Steel City",
      state: "6745c5788ce413e54c11d658",
    },
    {
      name: "Rajahmundry",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Ballari",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Agartala",
      state: "6745c5788ce413e54c11d667",
    },
    {
      name: "Bhagalpur",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Latur",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Dhule",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Korba",
      state: "6745c5788ce413e54c11d653",
    },
    {
      name: "Bhilwara",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Brahmapur",
      state: "6745c5788ce413e54c11d661",
    },
    {
      name: "Mysore",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Muzaffarpur",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Ahmednagar",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Kollam",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Raghunathganj",
      state: "6745c5788ce413e54c11d66a",
    },
    {
      name: "Bilaspur",
      state: "6745c5788ce413e54c11d653",
    },
    {
      name: "Shahjahanpur",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Thrissur",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Alwar",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Kakinada",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Nizamabad",
      state: "6745c5788ce413e54c11d666",
    },
    {
      name: "Sagar",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Tumkur",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Hisar",
      state: "6745c5788ce413e54c11d656",
    },
    {
      name: "Rohtak",
      state: "6745c5788ce413e54c11d656",
    },
    {
      name: "Panipat",
      state: "6745c5788ce413e54c11d656",
    },
    {
      name: "Darbhanga",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Kharagpur",
      state: "6745c5788ce413e54c11d66a",
    },
    {
      name: "Aizawl",
      state: "6745c5788ce413e54c11d65f",
    },
    {
      name: "Ichalkaranji",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Tirupati",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Karnal",
      state: "6745c5788ce413e54c11d656",
    },
    {
      name: "Bathinda",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Rampur",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Shivamogga",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Ratlam",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Modinagar",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Durg",
      state: "6745c5788ce413e54c11d653",
    },
    {
      name: "Shillong",
      state: "6745c5788ce413e54c11d65e",
    },
    {
      name: "Imphal",
      state: "6745c5788ce413e54c11d65d",
    },
    {
      name: "Hapur",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Ranipet",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Anantapur",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Arrah",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Karimnagar",
      state: "6745c5788ce413e54c11d666",
    },
    {
      name: "Parbhani",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Etawah",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Bharatpur",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Begusarai",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "New Delhi",
      state: "6745c5788ce413e54c11d66f",
    },
    {
      name: "Chhapra",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Kadapa",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Ramagundam",
      state: "6745c5788ce413e54c11d666",
    },
    {
      name: "Pali",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Satna",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Vizianagaram",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Katihar",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Hardwar",
      state: "6745c5788ce413e54c11d669",
    },
    {
      name: "Sonipat",
      state: "6745c5788ce413e54c11d656",
    },
    {
      name: "Nagercoil",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Thanjavur",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Murwara (Katni)",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Naihati",
      state: "6745c5788ce413e54c11d66a",
    },
    {
      name: "Sambhal",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Nadiad",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Yamunanagar",
      state: "6745c5788ce413e54c11d656",
    },
    {
      name: "English Bazar",
      state: "6745c5788ce413e54c11d66a",
    },
    {
      name: "Eluru",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Munger",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Panchkula",
      state: "6745c5788ce413e54c11d656",
    },
    {
      name: "Raayachuru",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Panvel",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Deoghar",
      state: "6745c5788ce413e54c11d658",
    },
    {
      name: "Ongole",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Nandyal",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Morena",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Bhiwani",
      state: "6745c5788ce413e54c11d656",
    },
    {
      name: "Porbandar",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Palakkad",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Anand",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Purnia",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Baharampur",
      state: "6745c5788ce413e54c11d66a",
    },
    {
      name: "Barmer",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Morvi",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Orai",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Bahraich",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Sikar",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Vellore",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Singrauli",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Khammam",
      state: "6745c5788ce413e54c11d666",
    },
    {
      name: "Mahesana",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Silchar",
      state: "6745c5788ce413e54c11d651",
    },
    {
      name: "Sambalpur",
      state: "6745c5788ce413e54c11d661",
    },
    {
      name: "Rewa",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Unnao",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Hugli-Chinsurah",
      state: "6745c5788ce413e54c11d66a",
    },
    {
      name: "Raiganj",
      state: "6745c5788ce413e54c11d66a",
    },
    {
      name: "Phusro",
      state: "6745c5788ce413e54c11d658",
    },
    {
      name: "Adityapur",
      state: "6745c5788ce413e54c11d658",
    },
    {
      name: "Alappuzha",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Bahadurgarh",
      state: "6745c5788ce413e54c11d656",
    },
    {
      name: "Machilipatnam",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Rae Bareli",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Jalpaiguri",
      state: "6745c5788ce413e54c11d66a",
    },
    {
      name: "Bharuch",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Pathankot",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Hoshiarpur",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Baramula",
      state: "6745c5788ce413e54c11d671",
    },
    {
      name: "Adoni",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Jind",
      state: "6745c5788ce413e54c11d656",
    },
    {
      name: "Tonk",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Tenali",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Kancheepuram",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Vapi",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Sirsa",
      state: "6745c5788ce413e54c11d656",
    },
    {
      name: "Navsari",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Mahbubnagar",
      state: "6745c5788ce413e54c11d666",
    },
    {
      name: "Puri",
      state: "6745c5788ce413e54c11d661",
    },
    {
      name: "Robertson Pet",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Erode",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Batala",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Haldwani-cum-Kathgodam",
      state: "6745c5788ce413e54c11d669",
    },
    {
      name: "Vidisha",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Saharsa",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Thanesar",
      state: "6745c5788ce413e54c11d656",
    },
    {
      name: "Chittoor",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Veraval",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Lakhimpur",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Sitapur",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Hindupur",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Santipur",
      state: "6745c5788ce413e54c11d66a",
    },
    {
      name: "Balurghat",
      state: "6745c5788ce413e54c11d66a",
    },
    {
      name: "Ganjbasoda",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Moga",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Proddatur",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Srinagar",
      state: "6745c5788ce413e54c11d669",
    },
    {
      name: "Medinipur",
      state: "6745c5788ce413e54c11d66a",
    },
    {
      name: "Habra",
      state: "6745c5788ce413e54c11d66a",
    },
    {
      name: "Sasaram",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Hajipur",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Bhuj",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Shivpuri",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Ranaghat",
      state: "6745c5788ce413e54c11d66a",
    },
    {
      name: "Shimla",
      state: "6745c5788ce413e54c11d657",
    },
    {
      name: "Tiruvannamalai",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Kaithal",
      state: "6745c5788ce413e54c11d656",
    },
    {
      name: "Rajnandgaon",
      state: "6745c5788ce413e54c11d653",
    },
    {
      name: "Godhra",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Hazaribag",
      state: "6745c5788ce413e54c11d658",
    },
    {
      name: "Bhimavaram",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Mandsaur",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Dibrugarh",
      state: "6745c5788ce413e54c11d651",
    },
    {
      name: "Kolar",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Bankura",
      state: "6745c5788ce413e54c11d66a",
    },
    {
      name: "Mandya",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Dehri-on-Sone",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Madanapalle",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Malerkotla",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Lalitpur",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Bettiah",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Pollachi",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Khanna",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Neemuch",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Palwal",
      state: "6745c5788ce413e54c11d656",
    },
    {
      name: "Palanpur",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Guntakal",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Nabadwip",
      state: "6745c5788ce413e54c11d66a",
    },
    {
      name: "Udupi",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Jagdalpur",
      state: "6745c5788ce413e54c11d653",
    },
    {
      name: "Motihari",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Pilibhit",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Dimapur",
      state: "6745c5788ce413e54c11d660",
    },
    {
      name: "Mohali",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Sadulpur",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Rajapalayam",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Dharmavaram",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Kashipur",
      state: "6745c5788ce413e54c11d669",
    },
    {
      name: "Sivakasi",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Darjiling",
      state: "6745c5788ce413e54c11d66a",
    },
    {
      name: "Chikkamagaluru",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Gudivada",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Baleshwar Town",
      state: "6745c5788ce413e54c11d661",
    },
    {
      name: "Mancherial",
      state: "6745c5788ce413e54c11d666",
    },
    {
      name: "Srikakulam",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Adilabad",
      state: "6745c5788ce413e54c11d666",
    },
    {
      name: "Yavatmal",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Barnala",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Nagaon",
      state: "6745c5788ce413e54c11d651",
    },
    {
      name: "Narasaraopet",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Raigarh",
      state: "6745c5788ce413e54c11d653",
    },
    {
      name: "Roorkee",
      state: "6745c5788ce413e54c11d669",
    },
    {
      name: "Valsad",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Ambikapur",
      state: "6745c5788ce413e54c11d653",
    },
    {
      name: "Giridih",
      state: "6745c5788ce413e54c11d658",
    },
    {
      name: "Chandausi",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Purulia",
      state: "6745c5788ce413e54c11d66a",
    },
    {
      name: "Patan",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Bagaha",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Hardoi ",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Achalpur",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Osmanabad",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Deesa",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Nandurbar",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Azamgarh",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Ramgarh",
      state: "6745c5788ce413e54c11d658",
    },
    {
      name: "Firozpur",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Baripada Town",
      state: "6745c5788ce413e54c11d661",
    },
    {
      name: "Karwar",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Siwan",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Rajampet",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Pudukkottai",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Anantnag",
      state: "6745c5788ce413e54c11d671",
    },
    {
      name: "Tadpatri",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Satara",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Bhadrak",
      state: "6745c5788ce413e54c11d661",
    },
    {
      name: "Kishanganj",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Suryapet",
      state: "6745c5788ce413e54c11d666",
    },
    {
      name: "Wardha",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Ranebennuru",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Amreli",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Neyveli (TS)",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Jamalpur",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Marmagao",
      state: "6745c5788ce413e54c11d654",
    },
    {
      name: "Udgir",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Tadepalligudem",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Nagapattinam",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Buxar",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Aurangabad",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Jehanabad",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Phagwara",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Khair",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Sawai Madhopur",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Kapurthala",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Chilakaluripet",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Aurangabad",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Malappuram",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Rewari",
      state: "6745c5788ce413e54c11d656",
    },
    {
      name: "Nagaur",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Sultanpur",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Nagda",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Port Blair",
      state: "6745c5788ce413e54c11d66b",
    },
    {
      name: "Lakhisarai",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Panaji",
      state: "6745c5788ce413e54c11d654",
    },
    {
      name: "Tinsukia",
      state: "6745c5788ce413e54c11d651",
    },
    {
      name: "Itarsi",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Kohima",
      state: "6745c5788ce413e54c11d660",
    },
    {
      name: "Balangir",
      state: "6745c5788ce413e54c11d661",
    },
    {
      name: "Nawada",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Jharsuguda",
      state: "6745c5788ce413e54c11d661",
    },
    {
      name: "Jagtial",
      state: "6745c5788ce413e54c11d666",
    },
    {
      name: "Viluppuram",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Amalner",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Zirakpur",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Tanda",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Tiruchengode",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Nagina",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Yemmiganur",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Vaniyambadi",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Sarni",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Theni Allinagaram",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Margao",
      state: "6745c5788ce413e54c11d654",
    },
    {
      name: "Akot",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Sehore",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Mhow Cantonment",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Kot Kapura",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Makrana",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Pandharpur",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Miryalaguda",
      state: "6745c5788ce413e54c11d666",
    },
    {
      name: "Shamli",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Seoni",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Ranibennur",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Kadiri",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Shrirampur",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Rudrapur",
      state: "6745c5788ce413e54c11d669",
    },
    {
      name: "Parli",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Najibabad",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Nirmal",
      state: "6745c5788ce413e54c11d666",
    },
    {
      name: "Udhagamandalam",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Shikohabad",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Jhumri Tilaiya",
      state: "6745c5788ce413e54c11d658",
    },
    {
      name: "Aruppukkottai",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Ponnani",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Jamui",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Sitamarhi",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Chirala",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Anjar",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Karaikal",
      state: "6745c5788ce413e54c11d670",
    },
    {
      name: "Hansi",
      state: "6745c5788ce413e54c11d656",
    },
    {
      name: "Anakapalle",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Mahasamund",
      state: "6745c5788ce413e54c11d653",
    },
    {
      name: "Faridkot",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Saunda",
      state: "6745c5788ce413e54c11d658",
    },
    {
      name: "Dhoraji",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Paramakudi",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Balaghat",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Sujangarh",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Khambhat",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Muktsar",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Rajpura",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Kavali",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Dhamtari",
      state: "6745c5788ce413e54c11d653",
    },
    {
      name: "Ashok Nagar",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Sardarshahar",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Mahuva",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Bargarh",
      state: "6745c5788ce413e54c11d661",
    },
    {
      name: "Kamareddy",
      state: "6745c5788ce413e54c11d666",
    },
    {
      name: "Sahibganj",
      state: "6745c5788ce413e54c11d658",
    },
    {
      name: "Kothagudem",
      state: "6745c5788ce413e54c11d666",
    },
    {
      name: "Ramanagaram",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Gokak",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Tikamgarh",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Araria",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Rishikesh",
      state: "6745c5788ce413e54c11d669",
    },
    {
      name: "Shahdol",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Medininagar (Daltonganj)",
      state: "6745c5788ce413e54c11d658",
    },
    {
      name: "Arakkonam",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Washim",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Sangrur",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Bodhan",
      state: "6745c5788ce413e54c11d666",
    },
    {
      name: "Fazilka",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Palacole",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Keshod",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Sullurpeta",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Wadhwan",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Gurdaspur",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Vatakara",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Tura",
      state: "6745c5788ce413e54c11d65e",
    },
    {
      name: "Narnaul",
      state: "6745c5788ce413e54c11d656",
    },
    {
      name: "Kharar",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Yadgir",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Ambejogai",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Ankleshwar",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Savarkundla",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Paradip",
      state: "6745c5788ce413e54c11d661",
    },
    {
      name: "Virudhachalam",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Kanhangad",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Kadi",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Srivilliputhur",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Gobindgarh",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Tindivanam",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Mansa",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Taliparamba",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Manmad",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Tanuku",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Rayachoti",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Virudhunagar",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Koyilandy",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Jorhat",
      state: "6745c5788ce413e54c11d651",
    },
    {
      name: "Karur",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Valparai",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Srikalahasti",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Neyyattinkara",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Bapatla",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Fatehabad",
      state: "6745c5788ce413e54c11d656",
    },
    {
      name: "Malout",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Sankarankovil",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Tenkasi",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Ratnagiri",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Rabkavi Banhatti",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Sikandrabad",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Chaibasa",
      state: "6745c5788ce413e54c11d658",
    },
    {
      name: "Chirmiri",
      state: "6745c5788ce413e54c11d653",
    },
    {
      name: "Palwancha",
      state: "6745c5788ce413e54c11d666",
    },
    {
      name: "Bhawanipatna",
      state: "6745c5788ce413e54c11d661",
    },
    {
      name: "Kayamkulam",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Pithampur",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Nabha",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Shahabad, Hardoi",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Dhenkanal",
      state: "6745c5788ce413e54c11d661",
    },
    {
      name: "Uran Islampur",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Gopalganj",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Bongaigaon City",
      state: "6745c5788ce413e54c11d651",
    },
    {
      name: "Palani",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Pusad",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Sopore",
      state: "6745c5788ce413e54c11d671",
    },
    {
      name: "Pilkhuwa",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Tarn Taran",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Renukoot",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Mandamarri",
      state: "6745c5788ce413e54c11d666",
    },
    {
      name: "Shahabad",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Barbil",
      state: "6745c5788ce413e54c11d661",
    },
    {
      name: "Koratla",
      state: "6745c5788ce413e54c11d666",
    },
    {
      name: "Madhubani",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Arambagh",
      state: "6745c5788ce413e54c11d66a",
    },
    {
      name: "Gohana",
      state: "6745c5788ce413e54c11d656",
    },
    {
      name: "Ladnu",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Pattukkottai",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Sirsi",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Sircilla",
      state: "6745c5788ce413e54c11d666",
    },
    {
      name: "Tamluk",
      state: "6745c5788ce413e54c11d66a",
    },
    {
      name: "Jagraon",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "AlipurdUrban Agglomerationr",
      state: "6745c5788ce413e54c11d66a",
    },
    {
      name: "Alirajpur",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Tandur",
      state: "6745c5788ce413e54c11d666",
    },
    {
      name: "Naidupet",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Tirupathur",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Tohana",
      state: "6745c5788ce413e54c11d656",
    },
    {
      name: "Ratangarh",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Dhubri",
      state: "6745c5788ce413e54c11d651",
    },
    {
      name: "Masaurhi",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Visnagar",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Vrindavan",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Nokha",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Nagari",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Narwana",
      state: "6745c5788ce413e54c11d656",
    },
    {
      name: "Ramanathapuram",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Ujhani",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Samastipur",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Laharpur",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Sangamner",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Nimbahera",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Siddipet",
      state: "6745c5788ce413e54c11d666",
    },
    {
      name: "Suri",
      state: "6745c5788ce413e54c11d66a",
    },
    {
      name: "Diphu",
      state: "6745c5788ce413e54c11d651",
    },
    {
      name: "Jhargram",
      state: "6745c5788ce413e54c11d66a",
    },
    {
      name: "Shirpur-Warwade",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Tilhar",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Sindhnur",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Udumalaipettai",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Malkapur",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Wanaparthy",
      state: "6745c5788ce413e54c11d666",
    },
    {
      name: "Gudur",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Kendujhar",
      state: "6745c5788ce413e54c11d661",
    },
    {
      name: "Mandla",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Mandi",
      state: "6745c5788ce413e54c11d657",
    },
    {
      name: "Nedumangad",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "North Lakhimpur",
      state: "6745c5788ce413e54c11d651",
    },
    {
      name: "Vinukonda",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Tiptur",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Gobichettipalayam",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Sunabeda",
      state: "6745c5788ce413e54c11d661",
    },
    {
      name: "Wani",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Upleta",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Narasapuram",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Nuzvid",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Tezpur",
      state: "6745c5788ce413e54c11d651",
    },
    {
      name: "Una",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Markapur",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Sheopur",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Thiruvarur",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Sidhpur",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Sahaswan",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Suratgarh",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Shajapur",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Rayagada",
      state: "6745c5788ce413e54c11d661",
    },
    {
      name: "Lonavla",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Ponnur",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Kagaznagar",
      state: "6745c5788ce413e54c11d666",
    },
    {
      name: "Gadwal",
      state: "6745c5788ce413e54c11d666",
    },
    {
      name: "Bhatapara",
      state: "6745c5788ce413e54c11d653",
    },
    {
      name: "Kandukur",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Sangareddy",
      state: "6745c5788ce413e54c11d666",
    },
    {
      name: "Unjha",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Lunglei",
      state: "6745c5788ce413e54c11d65f",
    },
    {
      name: "Karimganj",
      state: "6745c5788ce413e54c11d651",
    },
    {
      name: "Kannur",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Bobbili",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Mokameh",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Talegaon Dabhade",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Anjangaon",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Mangrol",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Sunam",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Gangarampur",
      state: "6745c5788ce413e54c11d66a",
    },
    {
      name: "Thiruvallur",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Tirur",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Rath",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Jatani",
      state: "6745c5788ce413e54c11d661",
    },
    {
      name: "Viramgam",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Rajsamand",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Yanam",
      state: "6745c5788ce413e54c11d670",
    },
    {
      name: "Kottayam",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Panruti",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Dhuri",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Namakkal",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Kasaragod",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Modasa",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Rayadurg",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Supaul",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Kunnamkulam",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Umred",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Bellampalle",
      state: "6745c5788ce413e54c11d666",
    },
    {
      name: "Sibsagar",
      state: "6745c5788ce413e54c11d651",
    },
    {
      name: "Mandi Dabwali",
      state: "6745c5788ce413e54c11d656",
    },
    {
      name: "Ottappalam",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Dumraon",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Samalkot",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Jaggaiahpet",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "6745c5788ce413e54c11d654lpara",
      state: "6745c5788ce413e54c11d651",
    },
    {
      name: "Tuni",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Lachhmangarh",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Bhongir",
      state: "6745c5788ce413e54c11d666",
    },
    {
      name: "Amalapuram",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Firozpur Cantt.",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Vikarabad",
      state: "6745c5788ce413e54c11d666",
    },
    {
      name: "Thiruvalla",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Sherkot",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Palghar",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Shegaon",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Jangaon",
      state: "6745c5788ce413e54c11d666",
    },
    {
      name: "Bheemunipatnam",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Panna",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Thodupuzha",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "KathUrban Agglomeration",
      state: "6745c5788ce413e54c11d671",
    },
    {
      name: "Palitana",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Arwal",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Venkatagiri",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Kalpi",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Rajgarh (Churu)",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Sattenapalle",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Arsikere",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Ozar",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Thirumangalam",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Petlad",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Nasirabad",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Phaltan",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Rampurhat",
      state: "6745c5788ce413e54c11d66a",
    },
    {
      name: "Nanjangud",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Forbesganj",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Tundla",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "BhabUrban Agglomeration",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Sagara",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Pithapuram",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Sira",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Bhadrachalam",
      state: "6745c5788ce413e54c11d666",
    },
    {
      name: "Charkhi Dadri",
      state: "6745c5788ce413e54c11d656",
    },
    {
      name: "Chatra",
      state: "6745c5788ce413e54c11d658",
    },
    {
      name: "Palasa Kasibugga",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Nohar",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Yevla",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Sirhind Fatehgarh Sahib",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Bhainsa",
      state: "6745c5788ce413e54c11d666",
    },
    {
      name: "Parvathipuram",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Shahade",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Chalakudy",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Narkatiaganj",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Kapadvanj",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Macherla",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Raghogarh-Vijaypur",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Rupnagar",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Naugachhia",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Sendhwa",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Byasanagar",
      state: "6745c5788ce413e54c11d661",
    },
    {
      name: "Sandila",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Gooty",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Salur",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Nanpara",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Sardhana",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Vita",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Gumia",
      state: "6745c5788ce413e54c11d658",
    },
    {
      name: "Puttur",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Jalandhar Cantt.",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Nehtaur",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Changanassery",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Mandapeta",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Dumka",
      state: "6745c5788ce413e54c11d658",
    },
    {
      name: "Seohara",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Umarkhed",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Madhupur",
      state: "6745c5788ce413e54c11d658",
    },
    {
      name: "Vikramasingapuram",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Punalur",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Kendrapara",
      state: "6745c5788ce413e54c11d661",
    },
    {
      name: "Sihor",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Nellikuppam",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Samana",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Warora",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Nilambur",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Rasipuram",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Ramnagar",
      state: "6745c5788ce413e54c11d669",
    },
    {
      name: "Jammalamadugu",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Nawanshahr",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Thoubal",
      state: "6745c5788ce413e54c11d65d",
    },
    {
      name: "Athni",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Cherthala",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Sidhi",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Farooqnagar",
      state: "6745c5788ce413e54c11d666",
    },
    {
      name: "Peddapuram",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Chirkunda",
      state: "6745c5788ce413e54c11d658",
    },
    {
      name: "Pachora",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Madhepura",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Pithoragarh",
      state: "6745c5788ce413e54c11d669",
    },
    {
      name: "Tumsar",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Phalodi",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Tiruttani",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Rampura Phul",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Perinthalmanna",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Padrauna",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Pipariya",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Dalli-Rajhara",
      state: "6745c5788ce413e54c11d653",
    },
    {
      name: "Punganur",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Mattannur",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Mathura",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Thakurdwara",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Nandivaram-Guduvancheri",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Mulbagal",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Manjlegaon",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Wankaner",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Sillod",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Nidadavole",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Surapura",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Rajagangapur",
      state: "6745c5788ce413e54c11d661",
    },
    {
      name: "Sheikhpura",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Parlakhemundi",
      state: "6745c5788ce413e54c11d661",
    },
    {
      name: "Kalimpong",
      state: "6745c5788ce413e54c11d66a",
    },
    {
      name: "Siruguppa",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Arvi",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Limbdi",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Barpeta",
      state: "6745c5788ce413e54c11d651",
    },
    {
      name: "Manglaur",
      state: "6745c5788ce413e54c11d669",
    },
    {
      name: "Repalle",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Mudhol",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Shujalpur",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Mandvi",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Thangadh",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Sironj",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Nandura",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Shoranur",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Nathdwara",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Periyakulam",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Sultanganj",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Medak",
      state: "6745c5788ce413e54c11d666",
    },
    {
      name: "Narayanpet",
      state: "6745c5788ce413e54c11d666",
    },
    {
      name: "Raxaul Bazar",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Rajauri",
      state: "6745c5788ce413e54c11d671",
    },
    {
      name: "Pernampattu",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Nainital",
      state: "6745c5788ce413e54c11d669",
    },
    {
      name: "Ramachandrapuram",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Vaijapur",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Nangal",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Sidlaghatta",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Punch",
      state: "6745c5788ce413e54c11d671",
    },
    {
      name: "Pandhurna",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Wadgaon Road",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Talcher",
      state: "6745c5788ce413e54c11d661",
    },
    {
      name: "Varkala",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Pilani",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Nowgong",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Naila Janjgir",
      state: "6745c5788ce413e54c11d653",
    },
    {
      name: "Mapusa",
      state: "6745c5788ce413e54c11d654",
    },
    {
      name: "Vellakoil",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Merta City",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Sivaganga",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Mandideep",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Sailu",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Vyara",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Kovvur",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Vadalur",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Nawabganj",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Padra",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Sainthia",
      state: "6745c5788ce413e54c11d66a",
    },
    {
      name: "Siana",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Shahpur",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Sojat",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Noorpur",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Paravoor",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Murtijapur",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Ramnagar",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Sundargarh",
      state: "6745c5788ce413e54c11d661",
    },
    {
      name: "Taki",
      state: "6745c5788ce413e54c11d66a",
    },
    {
      name: "Saundatti-Yellamma",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Pathanamthitta",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Wadi",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Rameshwaram",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Tasgaon",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Sikandra Rao",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Sihora",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Tiruvethipuram",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Tiruvuru",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Mehkar",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Peringathur",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Perambalur",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Manvi",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Zunheboto",
      state: "6745c5788ce413e54c11d660",
    },
    {
      name: "Mahnar Bazar",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Attingal",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Shahbad",
      state: "6745c5788ce413e54c11d656",
    },
    {
      name: "Puranpur",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Nelamangala",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Nakodar",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Lunawada",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Murshidabad",
      state: "6745c5788ce413e54c11d66a",
    },
    {
      name: "Mahe",
      state: "6745c5788ce413e54c11d670",
    },
    {
      name: "Lanka",
      state: "6745c5788ce413e54c11d651",
    },
    {
      name: "Rudauli",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Tuensang",
      state: "6745c5788ce413e54c11d660",
    },
    {
      name: "Lakshmeshwar",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Zira",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Yawal",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Thana Bhawan",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Ramdurg",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Pulgaon",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Sadasivpet",
      state: "6745c5788ce413e54c11d666",
    },
    {
      name: "Nargund",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Neem-Ka-Thana",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Memari",
      state: "6745c5788ce413e54c11d66a",
    },
    {
      name: "Nilanga",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Naharlagun",
      state: "6745c5788ce413e54c11d650",
    },
    {
      name: "Pakaur",
      state: "6745c5788ce413e54c11d658",
    },
    {
      name: "Wai",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Tarikere",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Malavalli",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Raisen",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Lahar",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Uravakonda",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Savanur",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Sirohi",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Udhampur",
      state: "6745c5788ce413e54c11d671",
    },
    {
      name: "Umarga",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Pratapgarh",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Lingsugur",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Usilampatti",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Palia Kalan",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Wokha",
      state: "6745c5788ce413e54c11d660",
    },
    {
      name: "Rajpipla",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Vijayapura",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Rawatbhata",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Sangaria",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Paithan",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Rahuri",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Patti",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Zaidpur",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Lalsot",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Maihar",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Vedaranyam",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Nawapur",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Solan",
      state: "6745c5788ce413e54c11d657",
    },
    {
      name: "Vapi",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Sanawad",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Warisaliganj",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Revelganj",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Sabalgarh",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Tuljapur",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Simdega",
      state: "6745c5788ce413e54c11d658",
    },
    {
      name: "Musabani",
      state: "6745c5788ce413e54c11d658",
    },
    {
      name: "Kodungallur",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Phulabani",
      state: "6745c5788ce413e54c11d661",
    },
    {
      name: "Umreth",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Narsipatnam",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Nautanwa",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Rajgir",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Yellandu",
      state: "6745c5788ce413e54c11d666",
    },
    {
      name: "Sathyamangalam",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Pilibanga",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Morshi",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Pehowa",
      state: "6745c5788ce413e54c11d656",
    },
    {
      name: "Sonepur",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Pappinisseri",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Zamania",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Mihijam",
      state: "6745c5788ce413e54c11d658",
    },
    {
      name: "Purna",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Puliyankudi",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Shikarpur, Bulandshahr",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Umaria",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Porsa",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Naugawan Sadat",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Fatehpur Sikri",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Manuguru",
      state: "6745c5788ce413e54c11d666",
    },
    {
      name: "Udaipur",
      state: "6745c5788ce413e54c11d667",
    },
    {
      name: "Pipar City",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Pattamundai",
      state: "6745c5788ce413e54c11d661",
    },
    {
      name: "Nanjikottai",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Taranagar",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Yerraguntla",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Satana",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Sherghati",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Sankeshwara",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Madikeri",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Thuraiyur",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Sanand",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Rajula",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Kyathampalle",
      state: "6745c5788ce413e54c11d666",
    },
    {
      name: "Shahabad, Rampur",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Tilda Newra",
      state: "6745c5788ce413e54c11d653",
    },
    {
      name: "Narsinghgarh",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Chittur-Thathamangalam",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Malaj Khand",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Sarangpur",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Robertsganj",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Sirkali",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Radhanpur",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Tiruchendur",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Utraula",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Patratu",
      state: "6745c5788ce413e54c11d658",
    },
    {
      name: "Vijainagar, Ajmer",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Periyasemur",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Pathri",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Sadabad",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Talikota",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Sinnar",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Mungeli",
      state: "6745c5788ce413e54c11d653",
    },
    {
      name: "Sedam",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Shikaripur",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Sumerpur",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Sattur",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Sugauli",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Lumding",
      state: "6745c5788ce413e54c11d651",
    },
    {
      name: "Vandavasi",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Titlagarh",
      state: "6745c5788ce413e54c11d661",
    },
    {
      name: "Uchgaon",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Mokokchung",
      state: "6745c5788ce413e54c11d660",
    },
    {
      name: "Paschim Punropara",
      state: "6745c5788ce413e54c11d66a",
    },
    {
      name: "Sagwara",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Ramganj Mandi",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Tarakeswar",
      state: "6745c5788ce413e54c11d66a",
    },
    {
      name: "Mahalingapura",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Dharmanagar",
      state: "6745c5788ce413e54c11d667",
    },
    {
      name: "Mahemdabad",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Manendragarh",
      state: "6745c5788ce413e54c11d653",
    },
    {
      name: "Uran",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Tharamangalam",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Tirukkoyilur",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Pen",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Makhdumpur",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Maner",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Oddanchatram",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Palladam",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Mundi",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Nabarangapur",
      state: "6745c5788ce413e54c11d661",
    },
    {
      name: "Mudalagi",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Samalkha",
      state: "6745c5788ce413e54c11d656",
    },
    {
      name: "Nepanagar",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Karjat",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Ranavav",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Pedana",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Pinjore",
      state: "6745c5788ce413e54c11d656",
    },
    {
      name: "Lakheri",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Pasan",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Puttur",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Vadakkuvalliyur",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Tirukalukundram",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Mahidpur",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Mussoorie",
      state: "6745c5788ce413e54c11d669",
    },
    {
      name: "Muvattupuzha",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Rasra",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Udaipurwati",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Manwath",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Adoor",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Uthamapalayam",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Partur",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Nahan",
      state: "6745c5788ce413e54c11d657",
    },
    {
      name: "Ladwa",
      state: "6745c5788ce413e54c11d656",
    },
    {
      name: "Mankachar",
      state: "6745c5788ce413e54c11d651",
    },
    {
      name: "Nongstoin",
      state: "6745c5788ce413e54c11d65e",
    },
    {
      name: "Losal",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Sri Madhopur",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Ramngarh",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Mavelikkara",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Rawatsar",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Rajakhera",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Lar",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Lal Gopalganj Nindaura",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Muddebihal",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Sirsaganj",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Shahpura",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Surandai",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Sangole",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Pavagada",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Tharad",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Mansa",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Umbergaon",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Mavoor",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Nalbari",
      state: "6745c5788ce413e54c11d651",
    },
    {
      name: "Talaja",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Malur",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Mangrulpir",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Soro",
      state: "6745c5788ce413e54c11d661",
    },
    {
      name: "Shahpura",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Vadnagar",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Raisinghnagar",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Sindhagi",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Sanduru",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Sohna",
      state: "6745c5788ce413e54c11d656",
    },
    {
      name: "Manavadar",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Pihani",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Safidon",
      state: "6745c5788ce413e54c11d656",
    },
    {
      name: "Risod",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Rosera",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Sankari",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Malpura",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Sonamukhi",
      state: "6745c5788ce413e54c11d66a",
    },
    {
      name: "Shamsabad, Agra",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Nokha",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "PandUrban Agglomeration",
      state: "6745c5788ce413e54c11d66a",
    },
    {
      name: "Mainaguri",
      state: "6745c5788ce413e54c11d66a",
    },
    {
      name: "Afzalpur",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Shirur",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Salaya",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Shenkottai",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Pratapgarh",
      state: "6745c5788ce413e54c11d667",
    },
    {
      name: "Vadipatti",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Nagarkurnool",
      state: "6745c5788ce413e54c11d666",
    },
    {
      name: "Savner",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Sasvad",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Rudrapur",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Soron",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Sholingur",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Pandharkaoda",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Perumbavoor",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Maddur",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Nadbai",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Talode",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Shrigonda",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Madhugiri",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Tekkalakote",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Seoni-Malwa",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Shirdi",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "SUrban Agglomerationr",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Terdal",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Raver",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Tirupathur",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Taraori",
      state: "6745c5788ce413e54c11d656",
    },
    {
      name: "Mukhed",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Manachanallur",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Rehli",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Sanchore",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Rajura",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Piro",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Mudabidri",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Vadgaon Kasba",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Nagar",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Vijapur",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Viswanatham",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Polur",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Panagudi",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Manawar",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Tehri",
      state: "6745c5788ce413e54c11d669",
    },
    {
      name: "Samdhan",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Pardi",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Rahatgarh",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Panagar",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Uthiramerur",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Tirora",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Rangia",
      state: "6745c5788ce413e54c11d651",
    },
    {
      name: "Sahjanwa",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Wara Seoni",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Magadi",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Rajgarh (Alwar)",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Rafiganj",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Tarana",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Rampur Maniharan",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Sheoganj",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Raikot",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Pauri",
      state: "6745c5788ce413e54c11d669",
    },
    {
      name: "Sumerpur",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Navalgund",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Shahganj",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Marhaura",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Tulsipur",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Sadri",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Thiruthuraipoondi",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Shiggaon",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Pallapatti",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Mahendragarh",
      state: "6745c5788ce413e54c11d656",
    },
    {
      name: "Sausar",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Ponneri",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Mahad",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Lohardaga",
      state: "6745c5788ce413e54c11d658",
    },
    {
      name: "Tirwaganj",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Margherita",
      state: "6745c5788ce413e54c11d651",
    },
    {
      name: "Sundarnagar",
      state: "6745c5788ce413e54c11d657",
    },
    {
      name: "Rajgarh",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Mangaldoi",
      state: "6745c5788ce413e54c11d651",
    },
    {
      name: "Renigunta",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Longowal",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Ratia",
      state: "6745c5788ce413e54c11d656",
    },
    {
      name: "Lalgudi",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Shrirangapattana",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Niwari",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Natham",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Unnamalaikadai",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "PurqUrban Agglomerationzi",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Shamsabad, Farrukhabad",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Mirganj",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Todaraisingh",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Warhapur",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Rajam",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Urmar Tanda",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Lonar",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Powayan",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "P.N.Patti",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Palampur",
      state: "6745c5788ce413e54c11d657",
    },
    {
      name: "Srisailam Project (Right Flank Colony) Township",
      state: "6745c5788ce413e54c11d64f",
    },
    {
      name: "Sindagi",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Sandi",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Vaikom",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Malda",
      state: "6745c5788ce413e54c11d66a",
    },
    {
      name: "Tharangambadi",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Sakaleshapura",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Lalganj",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Malkangiri",
      state: "6745c5788ce413e54c11d661",
    },
    {
      name: "Rapar",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Mauganj",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Todabhim",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Srinivaspur",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Murliganj",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Reengus",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Sawantwadi",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Tittakudi",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Lilong",
      state: "6745c5788ce413e54c11d65d",
    },
    {
      name: "Rajaldesar",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Pathardi",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Achhnera",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Pacode",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Naraura",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Nakur",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Palai",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Morinda, India",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Manasa",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Nainpur",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Sahaspur",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Pauni",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Prithvipur",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Ramtek",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Silapathar",
      state: "6745c5788ce413e54c11d651",
    },
    {
      name: "Songadh",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Safipur",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Sohagpur",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Mul",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Sadulshahar",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Phillaur",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Sambhar",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Prantij",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Nagla",
      state: "6745c5788ce413e54c11d669",
    },
    {
      name: "Pattran",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Mount Abu",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Reoti",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Tenu dam-cum-Kathhara",
      state: "6745c5788ce413e54c11d658",
    },
    {
      name: "Panchla",
      state: "6745c5788ce413e54c11d66a",
    },
    {
      name: "Sitarganj",
      state: "6745c5788ce413e54c11d669",
    },
    {
      name: "Pasighat",
      state: "6745c5788ce413e54c11d650",
    },
    {
      name: "Motipur",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "O' Valley",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Raghunathpur",
      state: "6745c5788ce413e54c11d66a",
    },
    {
      name: "Suriyampalayam",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Qadian",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Rairangpur",
      state: "6745c5788ce413e54c11d661",
    },
    {
      name: "Silvassa",
      state: "6745c5788ce413e54c11d66d",
    },
    {
      name: "Nowrozabad (Khodargama)",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Mangrol",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Soyagaon",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Sujanpur",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Manihari",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Sikanderpur",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Mangalvedhe",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Phulera",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Ron",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Sholavandan",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Saidpur",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Shamgarh",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Thammampatti",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Maharajpur",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Multai",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Mukerian",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Sirsi",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Purwa",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Sheohar",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Namagiripettai",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Parasi",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Lathi",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Lalganj",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Narkhed",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Mathabhanga",
      state: "6745c5788ce413e54c11d66a",
    },
    {
      name: "Shendurjana",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Peravurani",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Mariani",
      state: "6745c5788ce413e54c11d651",
    },
    {
      name: "Phulpur",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Rania",
      state: "6745c5788ce413e54c11d656",
    },
    {
      name: "Pali",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Pachore",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Parangipettai",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Pudupattinam",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Panniyannur",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Maharajganj",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Rau",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Monoharpur",
      state: "6745c5788ce413e54c11d66a",
    },
    {
      name: "Mandawa",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Marigaon",
      state: "6745c5788ce413e54c11d651",
    },
    {
      name: "Pallikonda",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Pindwara",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Shishgarh",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Patur",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Mayang Imphal",
      state: "6745c5788ce413e54c11d65d",
    },
    {
      name: "Mhowgaon",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Guruvayoor",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Mhaswad",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Sahawar",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Sivagiri",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Mundargi",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Punjaipugalur",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Kailasahar",
      state: "6745c5788ce413e54c11d667",
    },
    {
      name: "Samthar",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Sakti",
      state: "6745c5788ce413e54c11d653",
    },
    {
      name: "Sadalagi",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Silao",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Mandalgarh",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Loha",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Pukhrayan",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Padmanabhapuram",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Belonia",
      state: "6745c5788ce413e54c11d667",
    },
    {
      name: "Saiha",
      state: "6745c5788ce413e54c11d65f",
    },
    {
      name: "Srirampore",
      state: "6745c5788ce413e54c11d66a",
    },
    {
      name: "Talwara",
      state: "6745c5788ce413e54c11d662",
    },
    {
      name: "Puthuppally",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Khowai",
      state: "6745c5788ce413e54c11d667",
    },
    {
      name: "Vijaypur",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Takhatgarh",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Thirupuvanam",
      state: "6745c5788ce413e54c11d665",
    },
    {
      name: "Adra",
      state: "6745c5788ce413e54c11d66a",
    },
    {
      name: "Piriyapatna",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Obra",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Adalaj",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Nandgaon",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Barh",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Chhapra",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Panamattom",
      state: "6745c5788ce413e54c11d65a",
    },
    {
      name: "Niwai",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Bageshwar",
      state: "6745c5788ce413e54c11d669",
    },
    {
      name: "Tarbha",
      state: "6745c5788ce413e54c11d661",
    },
    {
      name: "Adyar",
      state: "6745c5788ce413e54c11d659",
    },
    {
      name: "Narsinghgarh",
      state: "6745c5788ce413e54c11d65b",
    },
    {
      name: "Warud",
      state: "6745c5788ce413e54c11d65c",
    },
    {
      name: "Asarganj",
      state: "6745c5788ce413e54c11d652",
    },
    {
      name: "Sarsod",
      state: "6745c5788ce413e54c11d656",
    },
    {
      name: "Gandhinagar",
      state: "6745c5788ce413e54c11d655",
    },
    {
      name: "Kullu",
      state: "6745c5788ce413e54c11d657",
    },
    {
      name: "Manali",
      state: "6745c5788ce413e54c11d657",
    },
    {
      name: "Mirzapur",
      state: "6745c5788ce413e54c11d668",
    },
    {
      name: "Kota",
      state: "6745c5788ce413e54c11d663",
    },
    {
      name: "Dispur",
      state: "6745c5788ce413e54c11d651",
    },
  ];
  const city = await City.insertMany(cities);
  return res
    .status(200)
    .json(new ApiResponse(200, { city }, "City data inserted successfully"));
});
