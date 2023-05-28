"use client";
import Image from 'next/image';
import styles from './page.module.css';
import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    setIsShown(current => !current);
  };

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          src="/static/images/Cover.png"
          alt="Cover"
          width={1154}
          height={800}
        />
        <Image
          src="/static/images/Page-1.png"
          alt="Page-1"
          width={638}
          height={938}
        />
        <Image
          src="/static/images/Page-2.png"
          alt="Page-2"
          width={638}
          height={938}
        />
        <div style={{color: 'white'}}>
          <div style={{textAlign: 'center', padding: '15px 0', fontSize: 14}}>
            <h3>Hoa viên Vườn Cau</h3>
            <p>755 Nguyễn Duy Trinh,</p>
            <p>Phường Phú Hữu, Tp. Thủ Đức.</p>
            <p style={{paddingTop: 15}}>Nhấn vào hình để mở bản đồ nhé !!!</p>
          </div>
          <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <a href="https://goo.gl/maps/9USnjcoqCGmpNGgb6" style={{display: 'flex', justifyContent: 'center'}}>
              <img style={{ borderRadius: 5, width: '80%' }} src="/static/images/Restaurant-map.png" alt="Hoa vien Vuon Cau" />
            </a>
          </div>
        </div>
        <button onClick={handleClick} className={`${styles.showButton} ${isShown ? styles.hide : ''}`}>Mừng cưới  <FontAwesomeIcon icon={faHeart} beat size="xs" /></button>
        <div className={`${styles.qrcode} ${isShown ? styles.show : ''}`}>
          <div style={{textAlign: 'center', paddingBottom: 10, fontSize: 14}}>
            <h3>Techcombank</h3>
            <p>NGUYEN THI THUY TRANG</p>
            <p>1903 5190 1590 18</p>
          </div>
          <img style={{ borderRadius: 5, width: '40%' }} src="/static/images/qrcode.png" alt="QC Code" />
        </div>                  
      </div>
      <div style={{padding: '12px 0', backgroundColor: 'white' ,color: '#d59a57', display: 'flex', alignItems: 'center', flexDirection: 'column', width: '100%'}}>
          <img style={{ borderRadius: 5, height: 100 }} src="/static/images/ring-svg.png" alt="QC Code" />
        </div>
    </main>
  )
}
