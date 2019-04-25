import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
      return (
        <div>
        {/* 좌측 위 LOGO 이미지 */}
          <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">  
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/" >
                  <div className="sidebar-brand-icon rotate-n-15">
                      <i className="fas fa-laugh-wink"></i>
                  </div>
                  <div className="sidebar-brand-text mx-3">더존비즈人</div>
            </Link>
            
            {/* 구분선 */}
            <hr className="sidebar-divider my-0" />


            <li className="nav-item active">
                <span className="nav-link">Menu</span>
            </li>

            {/* 구분선 */}
            <hr className="sidebar-divider" />
            
            <div className="sidebar-heading">
              Commute
            </div>

            {/* 출퇴근 메뉴 및 서브 메뉴 */}
            <li className="nav-item">
              <a 
                className="nav-link collapsed" 
                data-toggle="collapse" 
                data-target="#collapseTwo"
                aria-expanded="true" 
                aria-controls="collapseTwo"
                href="" >
                <i className="fas fa-fw fa-folder"></i>
                <span>출퇴근 관리</span>
              </a>
              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                  <Link className="collapse-item" to="list">출퇴근 조회</Link>
                  <Link className="collapse-item" to="setting">출퇴근 설정</Link>
                  <Link className="collapse-item" to="check">출퇴근 신청</Link>
                  <Link className="collapse-item" to="time">현재 근무 시간 조회</Link>
                </div>
              </div>
            </li>

            {/* 구분선 */}
            <hr className="sidebar-divider" />

            <div className="sidebar-heading">
              Working attitude
            </div>

            {/* 근태 메뉴 및 서브 메뉴 */}
            <li className="nav-item">
              <a 
                className="nav-link collapsed" 
                href="#" 
                data-toggle="collapse" 
                data-target="#collapseUtilities" 
                aria-expanded="true" 
                aria-controls="collapseUtilities">
                <i className="fas fa-fw fa-folder"></i>
                <span>근태 관리</span>
              </a>
              <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                  <a className="collapse-item" href="#">근태 조회</a>
                  <a className="collapse-item" href="#">근태 조정</a>
                  <a className="collapse-item" href="#">근태 조회</a>
                </div>
              </div>
            </li>

            {/* 구분선 */}
            <hr className="sidebar-divider" />
            
            {/* 활동기록 메뉴 */}
            <div className="sidebar-heading">
            Activity
            </div>

            {/* 서비스 설정 메뉴 및 서브 메뉴 */}
              <li className="nav-item">
                <a className="nav-link" href="#">
                <i className="fas fa-fw fa-table"></i>
                <span>활동 기록</span></a>
              </li>

                  <hr className="sidebar-divider" />
                  <div className="sidebar-heading">
                      Service
                  </div>
                  
                  <li className="nav-item">
                      <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
                          <i className="fas fa-fw fa-cog"></i>
                          <span>서비스 설정</span>
                      </a>
                      <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                          <div className="bg-white py-2 collapse-inner rounded">
                              <a className="collapse-item" href="#">근무시간 설정</a>
                              <a className="collapse-item" href="#">휴게시간 설정</a>
                              <a className="collapse-item" href="#">휴일 설정</a>
                          </div>
                      </div>
                  </li>
                  {/* 구분선 */}
            <hr className="sidebar-divider d-none d-md-block" />
          </ul>
        </div>
    );
  }
}

export default Navigation;
