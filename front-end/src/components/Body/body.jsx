import RecorderControls from "../recorder-controls";
import RecordingsList from "../recording-list/";
import useRecorder from "../hooks/useRecorder";

import axios from "axios";
import React, { useState } from "react";
import classesp from "./body.css";

const Body = () => {
  const [userData, setUserData] = useState({});
  const [file, setFile] = useState();
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
    const respones = [
      {
        id: "14e06377-62ea-4d3d-be34-76cd6aa6a737",
        headline: "ድርጅቱ ከባንኮች ጋር መሥራቱ አስተማማኝ የክፍያ ሥርዓት እንዲፈጠር አስችሏል",
        article:
          "የኢትዮጵያ የምርት ገበያ ድርጅት ከባንኮች ጋር\xa0 በጋራ በመስራቱ በተገበያዮች ላይ የክፍያ መተማመን እንዲፈጠር ማስቻሉን አስታውቋል፡፡ምርት\xa0 ገበያው ከአሁን ቀደም ከአስር ባንኮች ጋር በጋር በመስራቱ ላለፉት ዘጠኝ ዓመታት\xa0 በሚያከናውነው የግብይት ሂደት ላይ \xa0መተማመንን \xa0የፈጠረ የክፍያ ሥርዓት እንዲኖር አስችሏል ብሏል፡፡በዛሬው ዕለት ምርት ገበያው ከብርሃን ኢንተርናሽናል ባንክ ጋር በጋር\xa0 ለመስራት የሚያስችለውን ስምምነት ተፈራርሟል፡፡የአሁኑን ስምምነት ተከትሎ ምርት ገበያው ደንበኞቹ በአስራ አንድ ባንኮች የክፍያ አገልግሎት መፈጸም\xa0 እንዲችሉ የሚያደርግ ነው፡፡በአሁኑ ወቅት ድርጅቱ በዘጠኝ የሀገሪቱ አካባቢዎች እየገነባቸው ባሉ የግብይት መፈፀሚያ ማዕከላት ሻጭና አቅራቢዎች የክፍያ አገልግሎት እንዲፈጽሙ የሚያስችል ነው ብለዋል ዋና ስራ አስፈፃሚው አቶ ኤርሚያስ እሸቱ፡፡\xa0",
        audio: "../data/test_amharic.wav",
      },
      {
        id: "a658979e-8642-4fa4-9fc6-5d48286d6dc4",
        headline: "ወልዋሎ የአራት ተጫዋቾች ዝውውር አጠናቀቀ",
        article:
          "በዝውውሩ በስፋት እየተሳተፉ የሚገኙት ወልዋሎዎች ከወር በፊት ቀድመው የተስማሙት ኢታሙና ኬይሙኔ ፣ ዓይናለም ኃይሉ ፣ ኬኔዲ አሺያ እና ጆናስ ሎሎን አስፈርመዋል።የእግር ኳስ ህይቱ በተወለደበት ከተማ ዓዲግራት ጀምሮ ሃገሩን ለማገልገል ወደ መከላከያ ሰራዊት ባቀናበት ወቅት ባሳየው ጥሩ አቋም ባህር ዳር ዩኒቨርሲቲ ቀጥሎም መከላከያን የተቀላቀለው  ተከላካዩ ዓይናለም ኃይለ ከዚህ ቀደም ለደደቢት፣ ዳሽን ቢራ፣ ፋሲል ከነማ እንዲሁም ለኢትዮጵያ ብሄራዊ ቡድን መጫወቱ ይታወሳል።ሌሎች ወልዋሎ የተቀላቀሉት ናሚቢያዊያኑ ኢታሙና ኬይሙኔ እና ጆናስ ሎሎ ናቸው። ኢታሙና ባለፈው ዓመት ከብርቱካናማዎቹ ጋር የተሳካ ቆይታ የነበረው ተጫዋች ሲሆን በግብፁ የአፍሪካ ዋንጫም ተሳታፊ እንደነበር ይታወሳል። ሌላው አዲስ የቢጫ ለባሾቹ ፈራሚ ጆናስ ሎሎ ሲሆን ከኢታሙና ቀጥሎ በፕሪምየር ሊጉ የተጫወተ ሁለተኛው ናሚቢያዊ እንደሚሆን ይጠበቃል።አራተኛው የወልዋሎ ፈራሚ ከዚ በፊት በሲዳማ ቡና ቆይታ የነበረው ኬኔዲ አሺያ ነው። ተጫዋቹ በወቅቱ ከፍተኛ ክፍያ በ2009 ክረምት ክለቡን ቢቀላቀልም ብዙም ሳይቆይ መለያየቱ ይታወሳል።ቡድኑን በአዲስ መልክ እያዋቀረ የሚገኘው ወልዋሎ እስካሁን 13 ተጫዋቾች አስፈርሟል።",
        audio: "../data/test_amharic.wav",
      },
    ];
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