import { formatMinutes, formatSeconds } from "../../utils/format-time";
// import "./styles.css";

export default function RecorderControls({ recorderState, handlers }) {
  const { recordingMinutes, recordingSeconds, initRecording } = recorderState;
  const { startRecording, saveRecording, cancelRecording } = handlers;

  return (
    <div className="">
      <div className="">
        <div className="">
          {initRecording && <div className=""></div>}
          <span>{formatMinutes(recordingMinutes)}</span>
          <span>:</span>
          <span>{formatSeconds(recordingSeconds)}</span>
        </div>
        {initRecording && (
          <div className="">
            <button className="cancel-button" title="Cancel recording" onClick={cancelRecording}>CANCEL RECORDING</button>
          </div>
        )}
      </div>
      <div className="">
        {initRecording ? (<button className="" title="Save recording" disabled={recordingSeconds === 0} onClick={saveRecording}>SAVE RECORDING</button>) : 
        (
          <button className="" title="Start recording" onClick={startRecording}>START RECORDING</button>)
          }
      </div>
    </div>
  );
}