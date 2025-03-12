// src/components/Footer/index.tsx
import React, { useState } from 'react';
import { GithubOutlined, WechatFilled } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';

const Footer: React.FC = () => {
  const defaultMessage = 'BAZAHEY出品';
  const currentYear = new Date().getFullYear();
  const [showQR, setShowQR] = useState(false);

  // 自定义微信链接的渲染逻辑
  const renderWechatLink = () => {
    return (
      <div
        style={{ position: 'relative', display: 'inline-block' }}
        onMouseEnter={() => setShowQR(true)}
        onMouseLeave={() => setShowQR(false)}
      >
        {/* 微信图标 */}
        <a
          href="#" // 可以保留链接或设置为空
          target="_self"
          rel="noopener noreferrer"
          style={{ color: 'rgba(0, 0, 0, 0.85)' }}
        >
          <WechatFilled />
        </a>

        {/* 二维码图片弹层 */}
        {showQR && (
          <div
            style={{
              position: 'absolute',
              bottom: '30px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: '#fff',
              padding: 8,
              borderRadius: 4,
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              zIndex: 999,
            }}
          >
            {/* 替换为你的二维码图片路径 */}
            <img
              src="/wechat-qr.png" // 图片需放在 public/images 目录下
              alt="微信二维码"
              style={{ width: '400px', height: '546px' }}
            />
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      style={{
        position: 'fixed', // 固定定位
        height: '12%',
        bottom: 0, // 底部对齐
        left: 0, // 左侧对齐
        width: '100%', // 宽度占满屏幕
        background: '#fff', // 背景色
        zIndex: 10, // 确保在最上层
      }}
    >
      <DefaultFooter
        copyright={`${currentYear} ${defaultMessage}`}
        style={{ background: 'none' }}
        links={[
          {
            key: 'Generative-BI',
            title: 'Gen-BI',
            href: 'https://pro.ant.design',
            blankTarget: true,
          },
          {
            key: '微信',
            title: renderWechatLink(),
            href: '#',
            blankTarget: false,
          },
          {
            key: 'github',
            title: <GithubOutlined />,
            href: 'https://github.com/guojianjun-ts/Gen-BI',
            blankTarget: true,
          },
        ]}
      />
    </div>
  );
};

export default Footer;
