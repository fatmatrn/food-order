
import { useFormik } from "formik";
import Input from "../form/Input";
import Title from "./Title";



const Reservation = () => {
  const onSubmit =async  (values,actions)=>{
    await new Promise((resolve)=>setTimeout(resolve,400));
    actions.resetForm();
  }
  const formik = useFormik({
    initialValues:{
    fullName:"",
    phoneNumber:"",
    email:"",
    persons:"",
    date:""
    },
    onSubmit,
  })
  const inputs = [
    {
     id:1,
     name:"fullName",
     type:"text",
     placeHolder:"Your Full Name",
     value:formik.values.fullName
    },
    {
     id:2,
     name:"phoneNumber",
     type:"Number",
     placeHolder:"Your Phone Number",
     value:formik.values.phoneNumber
    },
    {
     id:3,
     name:"email",
     type:"email",
     placeHolder:"Your Email",
     value:formik.values.email
    },
    {
     id:4,
     name:"persons",
     type:"number",
     placeHolder:"How many persons?",
     value:formik.values.persons
    },
    {
     id:5,
     name:"date",
     type:"datetime-local",
     value:formik.values.date
    },
 
 ]
    return (
      <div className="container mx-auto py-12">
        <Title addClass="text-[40px] mb-10">Book A Table</Title>
        <div className="flex justify-between flex-wrap-reverse gap-10">
          <form className="lg:flex-1 w-full" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col gap-y-3">
              {
                inputs.map((input)=>(<Input {...input} key={input.id} onChange={formik.handleChange}/>))
              }
            </div>
            <button className="btn-primary mt-4" type="submit">BOOK NOW</button>
          </form>
          <div className="lg:flex-1  w-full">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28527.860949850565!2d-122.4677890901531!3d37.76487535071537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7dfe17c93019%3A0xc2fd87b9738fb652!2sTank%20Hill!5e0!3m2!1str!2str!4v1692042745281!5m2!1str!2str" allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full"></iframe>
      </div>
    </div>
    </div>

  );
};

export default Reservation;