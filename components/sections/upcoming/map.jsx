'use client';

import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, AttributionControl } from 'react-leaflet';
import { FaMapPin } from "react-icons/fa";
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';
import styles from './map.module.css';

const GUAM_CENTER = [13.4443, 144.7937];

const GUAM_BOUNDS = [
    [13.2000, 144.6000],
    [13.7000, 145.0000],
];

const VILLAGES = [
    { id: 'yigo', name: 'Yigo Outreach Center', lat: 13.5358, lng: 144.8893, venue: "Yigo Mayor's Office", details: "Free health screenings and immunizations." },
    { id: 'dededo', name: 'Dededo Mayor`s Office', lat: 13.51744, lng: 144.83912, venue: 'Dededo Mayor`s Office', details: "Mobile care clinic site (outreach)." },
    { id: 'tamuning', name: 'Todu Guam Foundation Clinic', lat: 13.4866, lng: 144.7801, venue: '125 Tun Jesus Crisostomo St', details: "Main TGF Health & Wellness Center.", isMainClinic: true },
    { id: 'hagat', name: 'Hågat Clinic', lat: 13.3886, lng: 144.6583, venue: "Hågat Mayor's Office", details: "Southern outreach location." },
    { id: 'Cathedral', name: 'Cathedral-Basilica', lat: 13.4743, lng: 144.7524, venue: "Cathedral Conference Center", details: "Mobile care clinic site (outreach)."},
];

// Custom marker icon for main clinic location
const createCustomIcon = (village, isActive) => {
    const isClinic = village.isMainClinic;

    const pinClasses = [
        styles.markerPin,
        isActive ? styles.activeMarkerPin : '',
        isClinic ? styles.starMarkerPin : '',
    ].join(' ');

    const starContent = isClinic ? `<span class="${styles.starIcon}">★</span>` : '';

    return L.divIcon({
        className: styles.customMarker,
        html: `<div class="${pinClasses}">${starContent}</div>`,
        iconSize: isClinic ? [20, 20] : [14, 14],
        iconAnchor: isClinic ? [10, 10] : [7, 7],
    });
};

export default function StandaloneMap() {
    const [activeVillage, setActiveVillage] = useState(null);
return (
    <div className={styles.mapContainer}>
      <header className={styles.header}>
        <h3 className={styles.title}>Guam Outreach Map</h3>
        <p className={styles.subtitle}>Click or tap a marker to view outreach location details</p>
      </header>

      <div className={styles.mapWrapper}>
        <MapContainer
          center={GUAM_CENTER}
          zoom={11}
          minZoom={10}
          maxZoom={15}
          scrollWheelZoom={true}
          maxBounds={GUAM_BOUNDS}
          maxBoundsViscosity={1.0}
          attributionControl={false}
          className={styles.leafletMap}
        >
          <AttributionControl position="bottomleft" prefix={false} />

          {/* Topographic tile layer */}
          <TileLayer
            attribution='&copy; <a href="https://www.esri.com">Esri</a>'
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
          />

          {/* Render pins for each village */}
          {VILLAGES.map((village) => (
            <Marker
              key={village.id}
              position={[village.lat, village.lng]}
              icon={createCustomIcon(village, activeVillage?.id === village.id)}
              eventHandlers={{
                click: () => setActiveVillage(village),
              }}
            >
              <Popup>
                <div className={styles.popupContent}>
                  <h4>{village.name}</h4>
                  <p><FaMapPin />{village.venue}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Detail panel below the map */}
      <div className={styles.detailPanel}>
        {activeVillage ? (
          <div className={styles.activeDetail}>
            <h4>{activeVillage.name}</h4>
            <p className={styles.venueText}>
              <FaMapPin />
              {activeVillage.venue}
            </p>
            <p>{activeVillage.details}</p>
          </div>
        ) : (
          <div className={styles.emptyDetail}>
            <p>Select a location on the map to see details</p>
          </div>
        )}
      </div>
    </div>
  );
}