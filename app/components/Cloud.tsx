type Props = {
  size?: number;
  fill?: string;
};

export default function Cloud({ size = 64, fill = "#f4efdc" }: Props) {
  return (
    <svg
      viewBox="0 0 16 8"
      width={size}
      height={size / 2}
      shapeRendering="crispEdges"
      style={{ imageRendering: "pixelated" }}
    >
      <rect x="3" y="3" width="10" height="3" fill={fill} />
      <rect x="4" y="2" width="8" height="1" fill={fill} />
      <rect x="6" y="1" width="4" height="1" fill={fill} />
      <rect x="2" y="4" width="1" height="1" fill={fill} />
      <rect x="13" y="4" width="1" height="1" fill={fill} />
      {/* outline */}
      <rect x="3" y="6" width="10" height="1" fill="#1a1a1a" />
      <rect x="2" y="5" width="1" height="1" fill="#1a1a1a" />
      <rect x="13" y="5" width="1" height="1" fill="#1a1a1a" />
    </svg>
  );
}
