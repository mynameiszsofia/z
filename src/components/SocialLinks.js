import React from 'react';
import config from '../../config';

export default function SocialLinks() {
  return (
    <section id="signup" className="contact-section bg-black">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                <div className="text-uppercase m-0" style={{ color: "#64a19d", fontWeight: "700" }}>Location</div>
                <hr className="my-4" />
                <div className="small text-black" style={{ color: "#64a19d", fontSize: "20px" }}>{config.address}</div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-envelope text-primary mb-2"></i>
                <div className="text-uppercase m-0" style={{ color: "#64a19d", fontWeight: "700" }}>Email</div>
                <hr className="my-4" />
                <div className="small text-black-50" style={{ color: "#64a19d", fontSize: "20px" }}>
                  <a href={`mailto:${config.email}`}>{config.email}</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-mobile-alt text-primary mb-2"></i>
                <div className="text-uppercase m-0" style={{ color: "#64a19d", fontWeight: "700" }}>Phone</div>
                <hr className="my-4" />
                <div className="small text-black" style={{ color: "#64a19d", fontSize: "20px" }}>{config.phone}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="social d-flex justify-content-center">
          {config.socialLinks.map(social => {
            const { icon, url } = social;
            return (
              <a key={url} href={url} className={`mx-2`}>
                <i className={`fab ${icon}`}></i>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
