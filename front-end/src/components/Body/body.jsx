import RecorderControls from "../recorder-controls";
import RecordingsList from "../recording-list/";
import useRecorder from "../hooks/useRecorder";

import axios from "axios";
import React, { useState, useEffect } from "react";
import classesp from "./body.css";

const Body = () => {
  const [userData, setUserData] = useState({});
  const [file, setFile] = useState();
  const [respones, setResponses] = useState([{}]);
  useEffect(() => {
    fetch("/members").then(
      res => res.json()
    ).then(
      data => {
        setResponses(data.data)
        console.log(data.data)
      }
    )
  }, [])
  const [componentToShow, setComponentToShow] = useState({
    record: true,
    send: false,
  });
  const { recorderState, ...handlers } = useRecorder();
  const { audio } = recorderState;

  
  const handleShowRecordComponent = () => {
    setComponentToShow({ record: true, send: false });
  };
  const handleShowSendComponent = () => {
    setComponentToShow({ record: false, send: true });
  };

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  function handleClick(event) {
    event.preventDefault();
    const random = Math.floor(Math.random() * respones.length);
    console.log(random, respones[random]);
        setUserData( respones[random]);
      
  }
  function audioSubmit(event) {
    event.preventDefault();
    const url = "https://afri-speech-to-text.herokuapp.com/send-audio";
    const formData = new FormData();
    formData.append("file", file);
    formData.append("YourFile", file.name);
    console.log(file.name);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    axios
      .post(url, formData, config)
      .then((response) => {
        console.log(response.data.success);
        setUserData(response.data);
      })
      .catch((err) => {
        console.log(err, "error here");
      });
  }
  return (
    <>
      {/* Get text */}
      <div className="bodys section__margin" id="wgpt3">
        <section>
          <form onClick={handleClick}>
            <div className="bodys-feature">
              <button className="shh" type="click">START</button>
            </div>
          </form>
        </section>
        <section>
          <div className="bodys-feature">
          <button className="sh"  onClick={handleShowRecordComponent} >INSERT AUDIO FILE</button>

            <button className="sh" onClick={handleShowSendComponent}>RECORD AUDIO</button>
          </div>
          <div>
            <p className="res">{userData.headline}</p>
          </div>
        </section>
                {/* Upload audio */}
                <div>
          {componentToShow.record && (
            <div>
              <div className={classesp.container}>
                <div className={classesp.upload}>
                  <div className="bodys-feature">
                    <form onSubmit={audioSubmit}>
                      <input type="file" onChange={handleChange} />
                      <button type="submit">SUBMIT</button>
                    </form>
                  </div>
                  <section>
                    <p>{userData.success}</p>
                  </section>
                </div>
              </div>
            </div>
          )}{" "}
        </div>

        {componentToShow.send && (
          <div>
            <div className="bodys-div" />
            <section className="voice-recorder">
            <h3>READOUT LOUD</h3>
              <div className="recorder-container">
                <RecorderControls
                  recorderState={recorderState}
                  handlers={handlers}
                />
                <RecordingsList audio={audio} />
              </div>
            </section>
          </div>
        )}{" "}
      </div>
    </>
  );
};

export default Body;