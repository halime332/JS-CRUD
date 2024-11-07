import axios from "axios";

// axios.create methodu axios'un temel ayarlarını belirlediğimiz bir 
//axios örneği oluşturu örneğin baseUrl'in belirleyerek bir örnek oluşturursak
//o axios örneği ile atıcağımız bütün api istekleri aynı base Url kullanarak atılır

const api = axios.create({ baseURL: "http://localhost:4040" });

export default api;