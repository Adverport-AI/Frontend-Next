"use client";

/**
 * PhoneMockupWrapper — mask-based screen overlay
 *
 * Uses the original SVG mask paths from svg-62qew to clip app screenshots
 * to the exact angled screen area of each phone frame.
 * All /assets/ imports replaced with /assets/ public URLs.
 */

import { imgScreen, imgScreen2 } from '../../imports/svg-62qew'

const imgShadow     = '/assets/730e4f03da4f8949f4b825e192296bf174e56fe2.png'
const imgIPhone1    = '/assets/b632c8b348a7d1c205d71b33e4614474ba9914d6.png'
const imgScreen1    = '/assets/9bb4d9024d3981d5ab41d235e650162f54d1cb14.png'
const imgContent1   = '/assets/4d2f93e3f146b46cc6cdb1e930864e967d9a906d.png'
const imgReflect    = '/assets/ddccec5ed925188c0b0890526d56b53b7269cc51.png'
const imgShadow1    = '/assets/4552d359cae94edd3ef029075972b9494a539072.png'
const imgShadow2    = '/assets/66e6e0b901a070ec84dcd39bdf5f32ca37c4c8e4.png'
const imgIPhone2    = '/assets/7c0b3043ac9af54679174f72f0d75ec8900572a6.png'
const imgScreen3    = '/assets/ad6922956a52200ed075b526020279beb0488245.png'
const imgContent2   = '/assets/898fde952be2522964e470e0daf5bcf0ebc8e53d.png'

// ─── Left phone ────────────────────────────────────────────────────────────

function LeftPhone() {
  return (
    <div style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }}>
      {/* Shadow */}
      <div style={{
        position: 'absolute',
        left: 'calc(50% - 151.38px)',
        top:  'calc(50% - 21.09px)',
        width:  641,
        height: 473,
        transform: 'translate(-50%, -50%)',
        opacity: 0.5,
        mixBlendMode: 'multiply',
      }}>
        <img src={imgShadow} alt="" style={{ width: '100%', height: '100%', objectFit: 'fill' }} />
      </div>

      {/* Frame */}
      <div style={{
        position: 'absolute',
        left: 'calc(50% - 133.36px)',
        top:  'calc(50% - 22.83px)',
        width:  547,
        height: 417,
        transform: 'translate(-50%, -50%)',
      }}>
        <img src={imgIPhone1} alt="Phone" style={{ width: '100%', height: '100%', objectFit: 'fill' }} />
      </div>

      {/* App screen — masked to the angled screen shape */}
      <div style={{
        position: 'absolute',
        left:   'calc(50% - 134.22px)',
        top:    'calc(50% - 33.3px)',
        width:  548,
        height: 399,
        transform: 'translate(-50%, -50%)',
        WebkitMaskImage: `url("${imgScreen}")`,
        maskImage:       `url("${imgScreen}")`,
        WebkitMaskSize:  '519.994px 379.706px',
        maskSize:        '519.994px 379.706px',
        WebkitMaskPosition: '15.545px 8.296px',
        maskPosition:       '15.545px 8.296px',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat:       'no-repeat',
      }}>
        <img src={imgContent1} alt="" style={{ width: '100%', height: '100%', objectFit: 'fill', display: 'block' }} />
      </div>

      {/* Reflection */}
      <div style={{
        position: 'absolute',
        left: 'calc(50% - 133.28px)',
        top:  'calc(50% - 33.62px)',
        width:  539,
        height: 393,
        transform:  'translate(-50%, -50%)',
        opacity:    0.25,
        mixBlendMode: 'screen',
        pointerEvents: 'none',
      }}>
        <img src={imgReflect} alt="" style={{ width: '100%', height: '100%', objectFit: 'fill' }} />
      </div>
    </div>
  )
}

// ─── Right phone ───────────────────────────────────────────────────────────

function RightPhone() {
  return (
    <div style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }}>
      {/* Outer shadow */}
      <div style={{
        position: 'absolute',
        left:   'calc(50% + 104.13px)',
        top:    'calc(50% + 45.17px)',
        width:   736,
        height:  425,
        transform: 'translate(-50%, -50%)',
        opacity: 0.5,
        mixBlendMode: 'multiply',
      }}>
        <img src={imgShadow1} alt="" style={{ width: '100%', height: '100%', objectFit: 'fill' }} />
      </div>

      {/* Inner shadow */}
      <div style={{
        position: 'absolute',
        left:   'calc(50% - 62.28px)',
        top:    'calc(50% - 25.07px)',
        width:   375,
        height:  284,
        transform: 'translate(-50%, -50%)',
        opacity: 0.5,
        mixBlendMode: 'multiply',
      }}>
        <img src={imgShadow2} alt="" style={{ width: '100%', height: '100%', objectFit: 'fill' }} />
      </div>

      {/* Frame */}
      <div style={{
        position: 'absolute',
        left:   'calc(50% + 131.62px)',
        top:    'calc(50% + 8.8px)',
        width:   622,
        height:  371,
        transform: 'translate(-50%, -50%)',
      }}>
        <img src={imgIPhone2} alt="Phone" style={{ width: '100%', height: '100%', objectFit: 'fill' }} />
      </div>

      {/* App screen — masked to angled screen shape */}
      <div style={{
        position: 'absolute',
        left:   'calc(50% + 131.2px)',
        top:    'calc(50% - 1.81px)',
        width:   617,
        height:  352,
        transform: 'translate(-50%, -50%)',
        WebkitMaskImage: `url("${imgScreen2}")`,
        maskImage:       `url("${imgScreen2}")`,
        WebkitMaskSize:  '593.729px 333.694px',
        maskSize:        '593.729px 333.694px',
        WebkitMaskPosition: '12.996px 8.68px',
        maskPosition:       '12.996px 8.68px',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat:       'no-repeat',
      }}>
        <img src={imgContent2} alt="" style={{ width: '100%', height: '100%', objectFit: 'fill', display: 'block' }} />
      </div>
    </div>
  )
}

// ─── Wrapper ───────────────────────────────────────────────────────────────

export default function PhoneMockupWrapper() {
  /*
   * Inner canvas: 944 × 590 px (original design dimensions).
   * Scaled down on smaller screens via CSS transform.
   * The outer div is sized by the aspect-ratio container in HeroSectionNew.
   */
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'visible' }}>
      <div
        className="scale-[0.30] min-[400px]:scale-[0.38] sm:scale-[0.62] md:scale-[0.69] lg:scale-100"
        style={{
          position: 'relative',
          width:  944,
          height: 590,
          flexShrink: 0,
          transformOrigin: 'center center',
        }}
      >
        <RightPhone />
        <LeftPhone />
      </div>
    </div>
  )
}
