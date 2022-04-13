import React from 'react';
import Link from 'next/link';

export default function Sociedades() {
  return (
    <>
      <div className="container-fluid user-info-container">
        <div className="row">
          {/* sidebar */}
          <div className="col-2 sidebar text-center">
            <div className="row text-center menu">
              <Link href={'/'} passHref>
                <p>Home</p>
              </Link>
              <Link href={'/profile'} passHref>
                <p>Mi prefil</p>
              </Link>
              <Link href={'/sociedades'} passHref>
                <p className="active">Sociedades</p>
              </Link>
            </div>
          </div>
          {/* sidebar end */}
          <div className="col-10 d-flex justify-content-end">
            <div className="col-8 mb-5">
              <div className="row my-3">
                <Link href={'/sociedad1'} passHref>
                  <div className="col-5 mx-auto sociedad">
                    <h5 className="sociedadHeading">sociedad 1</h5>
                  </div>
                </Link>
                <Link href={'/sociedad2'} passHref>
                  <div className="col-5 mx-auto sociedad">
                    <h5 className="sociedadHeading">sociedad 2</h5>
                  </div>
                </Link>
              </div>
              <div className="row my-3">
                <Link href={'/sociedad3'} passHref>
                  <div className="col-5 mx-auto sociedad">
                    <h5 className="sociedadHeading">sociedad 3</h5>
                  </div>
                </Link>
                <Link href={'/sociedad4'} passHref>
                  <div className="col-5 mx-auto sociedad">
                    <h5 className="sociedadHeading">sociedad 4</h5>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
