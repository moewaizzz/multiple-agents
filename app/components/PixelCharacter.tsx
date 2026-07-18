type Props = {
  size?: number;
};

// Two-frame walk cycle rendered as inline SVG.
// The wrapper bobs; two <g> layers swap opacity to give the illusion of steps.
export default function PixelCharacter({ size = 96 }: Props) {
  return (
    <div className="bob relative inline-block" style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        shapeRendering="crispEdges"
        style={{ imageRendering: "pixelated" }}
      >
        {/* Hair */}
        <rect x="5" y="1" width="6" height="1" fill="#1a1a1a" />
        <rect x="4" y="2" width="8" height="1" fill="#1a1a1a" />
        {/* Face */}
        <rect x="5" y="3" width="6" height="3" fill="#e9c78a" />
        {/* Eyes */}
        <rect x="6" y="4" width="1" height="1" fill="#1a1a1a" />
        <rect x="9" y="4" width="1" height="1" fill="#1a1a1a" />
        {/* Cheek */}
        <rect x="6" y="5" width="1" height="1" fill="#d9b64e" />
        <rect x="9" y="5" width="1" height="1" fill="#d9b64e" />
        {/* Neck */}
        <rect x="7" y="6" width="2" height="1" fill="#c9a670" />
        {/* Body / shirt */}
        <rect x="4" y="7" width="8" height="4" fill="#6b8e4e" />
        <rect x="4" y="7" width="8" height="1" fill="#3d5a30" />
        {/* Arms */}
        <rect x="3" y="7" width="1" height="4" fill="#e9c78a" />
        <rect x="12" y="7" width="1" height="4" fill="#e9c78a" />
        {/* Belt */}
        <rect x="4" y="11" width="8" height="1" fill="#1a1a1a" />

        {/* Legs — frame A */}
        <g className="walk-a">
          <rect x="5" y="12" width="2" height="3" fill="#3d5a30" />
          <rect x="9" y="12" width="2" height="3" fill="#3d5a30" />
          <rect x="5" y="15" width="2" height="1" fill="#1a1a1a" />
          <rect x="9" y="15" width="2" height="1" fill="#1a1a1a" />
        </g>
        {/* Legs — frame B (offset) */}
        <g className="walk-b">
          <rect x="4" y="12" width="2" height="3" fill="#3d5a30" />
          <rect x="10" y="12" width="2" height="3" fill="#3d5a30" />
          <rect x="4" y="15" width="2" height="1" fill="#1a1a1a" />
          <rect x="10" y="15" width="2" height="1" fill="#1a1a1a" />
        </g>
      </svg>
    </div>
  );
}
