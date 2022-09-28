import React,{useState} from 'react';
import "./Three.css";
import ReactPlayer from 'react-player'


const Three = () => {
  const [form, setForm] = useState({
    image : null,
    video : null,
  });

  const {image , video} = form;

  const changePhoto =(e)=>{
    setForm({...form, image: e.target.files[0]});
  }
  const changeVideo = (e)=>{
    setForm({...form, video: e.target.files[0]}); 
  }

  const submitHandler= (e) =>{
    e.preventDefault();   // must add this line of submit handler otherwise video can't play
    setForm("")
    console.log(form);
  }
  return (
    <div className="details">
      <h1>Sending Photo and video</h1>
      <div>
          <h3>Image and video Upload Form</h3>
           <div 
          //  style={{
          //   display: "block",
          //   padding: "5px",
          //   margin: "10px",
          //  }}
           >
                <form onSubmit={submitHandler}>
                  <label> Photo : &nbsp;
                   <input type="file" name="image" onChange={changePhoto} accept='images/*' />
                   </label> <br/>
                   {form.image &&(
                    <div style={{ marginTop: '50px' }}>
                        <img src={
                          form.image ? URL.createObjectURL(form.image) : 'null'
                        }
                        style={{ maxWidth: '100%', maxHeight: 320 }}
                        alt="Thumb" 
                        />
                    </div>
                   )}
                   <label> Video : &nbsp;
                   <input type="file" onChange={changeVideo} name="video"/>
                   </label><br/>
                  
                   {form.video && (
                    <div style={{ marginTop: '50px' }}>
                      <ReactPlayer 
                           playing
                          url= {form.video && form.video ? URL.createObjectURL(form.video): 'null'}
                          style={{ maxWidth: '100%', maxHeight: 320 }}
                          controls={true}
                      />
                    </div>
                   )}
                   
                   <input type="submit" value="Submit"/>
                 </form>
           </div>
      </div>
     
    </div>
  )
}

export default Three
