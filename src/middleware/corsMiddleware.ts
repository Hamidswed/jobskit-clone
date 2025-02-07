// corsMiddleware.ts  
import Cors from 'cors';  

// Initializing the cors middleware  
const cors = Cors({  
  methods: ['GET', 'POST', 'OPTIONS'],  
  origin: '*', // می‌توانید دامنه‌ها را به دلخواه مشخص کنید  
});  

// Middleware برای برازش درخواست‌های CORS  
export const runCors = (req: any, res: any) =>   
  new Promise((resolve, reject) => {  
    cors(req, res, (result: any) => {  
      if (result instanceof Error) {  
        return reject(result);  
      }  
      resolve(result);  
    });  
  });