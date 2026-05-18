import axios from "axios";
const Api="https://6994554ffade7a9ec0f50ffa.mockapi.io/TablePtoject2"


export const GetTodo =async()=>{
    
    try {
        const res=await axios.get(Api)
        return res.data
    } catch (error) {
        console.error(error);
        
    }
} 
export const DeleteUser =async(id:any)=>{
    try {
        await axios.delete(`${Api}/${id}`)
        
    } catch (error) {
        console.error(error);
        
    }

    
} 



export const AddUser = async (user: any) => {
  try {
    await axios.post(Api, user);
  } catch (error) {
    console.error(error);
  }
};

export const EditUser = async ({
  id,
  user,
}: any) => {
  try {
    await axios.put(`${Api}/${id}`, user);
  } catch (error) {
    console.error(error);
  }
};
export const EditStatus = async ({
  id,
  status,
}: any) => {
  try {
    await axios.put(`${Api}/${id}`, {
      status,
    });
  } catch (error) {
    console.error(error);
  }
};
export const GetUserById = async (id: any) => {
  try {
    const res = await axios.get(`${Api}/${id}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};