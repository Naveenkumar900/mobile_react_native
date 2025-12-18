import {View, Button} from 'react-native';
export function Listdemo(){
    const users=["Naveen","Nilesh","Nikhil","Vansh","Vastav","Aniket","Rohan","Sanket","Akash","Shubham","Pratik","Mayur",  "Omkar","Aditya","Rajat","Yogesh","Karan","Harsh","Tushar","Sahil","Anshul","Dhruv","Rudra","Shaurya","Tanmay","Ujjwal","Vivek","Yash","Zaid","Kishan","Manan","Parth","Rishabh","Samarth","Tanishq","Vedant","Yuvraj","Zayan","Aarav","Bhavin","Chirag","Darshan","Eshan","Farhan","Gaurav","Himanshu","Ishaan","Jatin","Kunal","Lakshya","Mayank","Naman"];
    const useritems=users.map((item, idx)=>(
      <View key={idx}>
        <Button title={item}  />
      </View>
    ))
    return(
        <View>
           {useritems}
        </View>
    )
}