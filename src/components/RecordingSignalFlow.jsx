export default function RecordingSignalFlow() {
  return (
    <figure className="recording-signal-flow" aria-hidden="true">
      <div className="recording-status-pill">
        <span className="recording-status-dot" />
        <span>Gravando</span>
      </div>

      <svg className="recording-signal-svg" viewBox="0 0 720 280" focusable="false" preserveAspectRatio="xMidYMid meet">
        <defs>
          <path
            id="heartbeatFlowSegment"
            d="M0 142 C22 141 38 144 58 142 C80 140 92 137 108 142 C124 147 138 148 152 142 L174 142 L184 132 L194 153 L206 123 L220 166 L234 142 C254 139 270 140 288 142 C306 145 320 146 338 142 L360 142"
          />

          <linearGradient id="recordingSignalStroke" x1="0" x2="720" y1="0" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#08282b" stopOpacity="0.16" />
            <stop offset="38%" stopColor="#2f7478" stopOpacity="0.92" />
            <stop offset="70%" stopColor="#6f8e7f" stopOpacity="0.74" />
            <stop offset="100%" stopColor="#08282b" stopOpacity="0.24" />
          </linearGradient>

          <linearGradient id="recordingSignalFade" x1="0" x2="720" y1="0" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="black" />
            <stop offset="13%" stopColor="white" />
            <stop offset="87%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </linearGradient>

          <mask id="recordingSignalMask">
            <rect width="720" height="280" fill="url(#recordingSignalFade)" />
          </mask>
        </defs>

        <rect width="720" height="280" fill="transparent" />
        <rect className="recording-signal-panel-line" x="84" y="140.5" width="552" height="1" rx="0.5" />

        <g mask="url(#recordingSignalMask)" strokeLinecap="round" strokeLinejoin="round">
          <g className="recording-signal-stream">
            <g className="recording-signal-lift">
              <g className="recording-signal-glow" stroke="rgba(47, 116, 120, 0.13)">
                <use href="#heartbeatFlowSegment" />
                <use href="#heartbeatFlowSegment" x="360" />
                <use href="#heartbeatFlowSegment" x="720" />
              </g>
              <g className="recording-signal-main" stroke="url(#recordingSignalStroke)">
                <use href="#heartbeatFlowSegment" />
                <use href="#heartbeatFlowSegment" x="360" />
                <use href="#heartbeatFlowSegment" x="720" />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </figure>
  );
}
