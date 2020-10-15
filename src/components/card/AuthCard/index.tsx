import './style.scss';
import React from 'react';
import BaseCard from '../index';

type AuthCardProps = {
  content: any;
  title: string;
};

const AuthCard: React.FC<AuthCardProps> = ({ content, title }: AuthCardProps) => {
  const CardSidebar: React.FC = () => (
    <section id="card-section">
      <div>
        <h1>{title}</h1>
      </div>
      {content}
    </section>
  )
  return <BaseCard content={<CardSidebar/>} className="auth-card" />;
};

export default AuthCard;
