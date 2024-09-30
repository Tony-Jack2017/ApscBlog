import React, {CSSProperties} from 'react';

interface AvatarGroupItf {
  // 在这里定义你的 props
  className?: string
  style?: CSSProperties
}

const AvatarGroup: React.FC<AvatarGroupItf> = (props) => {

  const {className, style} = props

  return (
    <div className={className} style={style}>
      {/* 其他组件内容 */}
    </div>
  );
};

export default AvatarGroup;