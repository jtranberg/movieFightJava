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
const debounce = (func, delay = 1000) => {        //default delay
   let timeoutId;
   return (...args) => {
     if (timeoutId) {
      clearTimeout(timeoutId);
     }
     timeoutId = setTimeout(() => {
      func.apply(null, args);
     }, delay);
   };
};

const onInput = event => {
   fetchData(event.target.value);
};  
input.addEventListener('input',debounce(onInput, 500));  //hard code delay or remove for user input

