import React from 'react';
import Box from '../box/Box';
import './Referral.css'

function Referral() {
  return (
    <div className='container'>
      <Box myClass='top-parent'>
        <Box myClass='top-child-left'>
          <h2>REMAINING REFERRAL CNR</h2>
          <h2>0 CNR</h2>
        </Box>
        <Box myClass='top-child-right'>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat eius illum sit optio pariatur error nulla voluptatibus
            veniam assumenda consequuntur.
          </p>
          <strong>REFFERAL LINK</strong>
          <div>
            <input type="text"/>
            <button>COPY</button>
          </div>
        </Box>
      </Box>
      <Box myClass='middle-parent'>
        <div className="center">
          <h2>5,000,000 CNR UP FOR GRABS</h2>
          <b>Get 3 rewards based on referrals level of play, resets daily</b>
          <div className="table">
            <div className="table-left">
              <b>WHEN REFERRAL WAGERS:</b>
              <div><strong>Bronze - 0 TRX</strong></div>
              <div><strong>Silver - 0 TRX</strong></div>
              <div><strong>Gold - 0 TRX</strong></div>
            </div>
            <div className="table-right">
              <b>YOU GET REWARD:</b>
              <div><strong>Bronze - 0 CNR</strong></div>
              <div><strong>Silver - 0 CNR</strong></div>
              <div><strong>Gold - 0 CNR</strong></div>
            </div>
          </div>
          <strong>Maximum reward per referral per day - 0 CNR</strong>
        </div>
      </Box>
      <Box myClass='bottom-parent'>
        <div className='caption'>
          <strong className='caption-item-1'>List of Referrals</strong>
          <strong className='caption-item-2'>0 CNR</strong>
          <button className='caption-item-3'>CLAIM ALL</button>
        </div>
        <div className='header'>
          <strong>REFERRAL</strong>
          <strong>REGESTRATION DATE</strong>
          <strong>REWARD</strong>
          <strong></strong>
        </div>
        <div className='body'>
          <strong>No referrals yet</strong>
        </div>
      </Box>
      <Box myClass='footer'>
        <p>
          <strong>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi velit voluptates aliquid sequi
            cupiditate amet suscipit obcaecati quam dolor vitae temporibus, dolore voluptas praesentium eaque
            ducimus mollitia, itaque repellat nisi dolores eius unde. Veniam in vitae ab distinctio fuga
            doloribus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi velit voluptates aliquid
            cupiditate amet suscipit obcaecati quam dolor vitae temporibus, dolore voluptas praesentium eaque
            ducimus mollitia, itaque repellat nisi dolores eius unde. Veniam in vitae ab distinctio fuga
            doloribus.
          </strong>
        </p>
        <p>
          <strong>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi velit voluptates aliquid sequi
            cupiditate amet suscipit obcaecati quam dolor vitae temporibus, dolore voluptas praesentium eaque
            ducimus mollitia, itaque repellat nisi dolores eius unde. Veniam in vitae ab distinctio fuga
            doloribus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi velit voluptates aliquid
            cupiditate amet suscipit obcaecati quam dolor vitae temporibus, dolore voluptas praesentium eaque
            ducimus mollitia, itaque repellat nisi dolores eius unde. Veniam in vitae ab distinctio fuga
            doloribus.
          </strong>
        </p>
      </Box>
    </div>
  );
}

export default Referral;