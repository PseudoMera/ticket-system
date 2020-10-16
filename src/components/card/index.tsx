import React from 'react';

import { Card } from 'primereact/card';

type BaseCardProps = {
  id: string;
  content: any;
  title: string;
  subtitle: string;
  header: any;
  footer: any;
  className: string;
  style: object;
};

const BaseCard: React.FC<Partial<BaseCardProps>> = ({
  className,
  content,
  footer,
  header,
  id,
  style,
  subtitle,
  title,
}: Partial<BaseCardProps>) => {
  return (
    <Card
      title={title}
      subTitle={subtitle}
      className={className}
      id={id}
      header={header}
      footer={footer}
      style={style}
    >
      {content}
    </Card>
  );
};

export default BaseCard;
