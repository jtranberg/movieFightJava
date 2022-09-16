const fetchData = async (searchTerm) => {
   const response = await axios.get('http://www.omdbapi.com/', {
    params: {
       apikey: '613766f9',
       s: searchTerm
    }
   });
   console.log(response.data);
};

const input = document.querySelector('input');
let timeoutId;
const onInput = event => {
   if (timeoutId) {                    //this timeout waits for last key press before fetching api data keeping calls low 
      clearTimeout(timeoutId);
   }
   timeoutId = setTimeout(() => {
      fetchData(event.target.value);
   }, 500)                               //time to wait after last keypress
   
 };  
input.addEventListener('input', onInput);

