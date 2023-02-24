import './App.css';
import tableData from "./table_data.json";
import * as React from "react";
import { useTable } from 'react-table';

function App() {
  const data = React.useMemo(() => tableData, []);
  const columns = React.useMemo(() => [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "Bundle Name",
      accessor: "bundle_name",
    },
    {
      Header: "E-commerce Platform",
      accessor: "e_commerce_platform",
    },
    {
      Header: "E-commerce Space",
      accessor: "e_commerce_space",
    },
    {
      Header: "CMS",
      accessor: "CMS",
    },
    {
      Header: "CMS Space",
      accessor: "CMS_space",
    },
    {
      Header: "GitHub Repository",
      accessor: "repository_link"
    },
    {
      Header: "Cloud Demo",
      accessor: "demo_link"
    }
  ], 
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = 
    useTable({ columns, data });

  return (
    <div className="App">
      
      <div className='navbar'>
        <svg width="800" height="100" viewBox="0 0 1462 304" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1035.29 133.99H1018.44V153.599H1035.29V210.826H1058.82V153.599H1079V133.99H1058.82V129.778C1058.82 126.874 1059.74 124.72 1061.58 123.315C1063.42 121.91 1066.13 121.208 1069.71 121.208C1071.19 121.204 1072.67 121.277 1074.14 121.426C1075.77 121.61 1077.4 121.876 1079 122.225V102.762C1077.07 102.306 1075.1 101.967 1073.12 101.745C1070.93 101.466 1068.72 101.321 1066.51 101.309C1056.44 101.31 1048.72 103.731 1043.35 108.571C1037.97 113.413 1035.29 120.337 1035.29 129.342V133.99Z" fill="#02C652"/>
          <path d="M625.831 195.285L639.775 177.128C644.956 181.498 650.725 185.117 656.915 187.877C662.203 190.097 667.882 191.233 673.617 191.217C679.33 191.217 683.809 190.346 687.054 188.603C690.296 186.861 691.918 184.44 691.919 181.341C691.971 180.064 691.699 178.795 691.128 177.652C690.556 176.508 689.704 175.529 688.652 174.804C686.472 173.257 682.865 172.046 677.83 171.173L655.462 167.252C647.23 165.799 640.888 162.652 636.435 157.811C631.979 152.969 629.752 146.82 629.753 139.364C629.753 129.585 633.457 121.863 640.864 116.197C648.272 110.533 658.463 107.701 671.439 107.7C679.228 107.74 686.958 109.065 694.316 111.622C701.498 113.96 708.211 117.549 714.143 122.225L700.925 140.671C696.204 136.861 690.941 133.777 685.31 131.52C680.328 129.604 675.035 128.619 669.697 128.616C664.661 128.616 660.666 129.415 657.713 131.013C654.758 132.61 653.281 134.764 653.283 137.477C653.233 138.614 653.466 139.747 653.96 140.773C654.455 141.799 655.195 142.688 656.115 143.359C658.004 144.764 661.079 145.805 665.339 146.482L686.399 149.968C696.179 151.518 703.612 154.762 708.696 159.699C713.779 164.637 716.321 171.028 716.321 178.872C716.321 189.137 712.327 197.271 704.338 203.274C696.35 209.278 685.481 212.28 671.73 212.279C663.416 212.247 655.175 210.721 647.401 207.776C639.536 204.905 632.236 200.677 625.831 195.285Z" fill="#02C652"/>
          <path d="M360.321 210.826L319.217 109.153H346.233L375.137 184.826L404.623 109.153H430.621L388.935 210.826H360.321Z" fill="#02C652"/>
          <path d="M452.554 133.99V178.146C452.448 180.005 452.736 181.865 453.4 183.605C454.063 185.344 455.086 186.924 456.403 188.241C457.719 189.557 459.299 190.581 461.039 191.244C462.778 191.907 464.639 192.195 466.497 192.09C469.245 192.142 471.971 191.597 474.486 190.492C476.752 189.473 478.744 187.93 480.296 185.99V133.99H503.827V210.826H480.296V205.597C477.422 207.762 474.207 209.431 470.783 210.536C467.196 211.706 463.445 212.294 459.672 212.279C450.666 212.279 443.307 209.374 437.593 203.564C431.879 197.754 429.023 190.346 429.024 181.341V133.99H452.554Z" fill="#02C652"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M573.908 209.519C579.354 207.466 584.394 204.466 588.796 200.659L573.254 186.861C571.351 188.741 569.075 190.2 566.572 191.145C563.788 192.192 560.832 192.71 557.857 192.67C553.724 192.766 549.663 191.573 546.237 189.257C543.027 187.082 540.506 184.033 538.975 180.47H593.734V174.659C593.783 168.938 592.799 163.255 590.829 157.884C589.048 152.964 586.309 148.446 582.768 144.593C579.211 140.788 574.902 137.763 570.113 135.713C565.325 133.662 560.162 132.63 554.953 132.682C549.549 132.641 544.192 133.678 539.193 135.733C534.442 137.674 530.123 140.537 526.484 144.157C522.858 147.805 519.973 152.121 517.988 156.866C515.895 161.804 514.832 167.118 514.864 172.481C514.834 177.858 515.948 183.181 518.132 188.095C520.228 192.869 523.239 197.187 526.993 200.804C530.828 204.457 535.343 207.319 540.283 209.228C545.51 211.28 551.08 212.316 556.696 212.279C562.55 212.366 568.375 211.432 573.908 209.519ZM544.495 155.051C547.384 152.894 550.913 151.769 554.517 151.855C558.118 151.797 561.631 152.976 564.466 155.197C567.356 157.474 569.505 160.557 570.639 164.057H538.539C539.497 160.489 541.587 157.329 544.495 155.051Z" fill="#02C652"/>
          <path d="M734.623 153.599V187.441C734.622 195.479 736.97 201.555 741.667 205.67C746.363 209.785 753.311 211.843 762.511 211.843C765.282 211.801 768.047 211.583 770.791 211.19C773.545 210.867 776.266 210.308 778.925 209.519V190.492C777.166 191.033 775.37 191.446 773.551 191.726C771.819 191.975 770.071 192.096 768.321 192.09C764.543 192.09 761.904 191.388 760.405 189.983C758.904 188.58 758.154 186.184 758.154 182.793V153.599H779.649V133.99H758.154V109.153L734.623 114.236V133.99H719.081V153.599H734.623Z" fill="#02C652"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M785.314 172.481C785.285 167.103 786.399 161.781 788.583 156.866C790.681 152.093 793.691 147.776 797.444 144.157C801.27 140.511 805.755 137.628 810.66 135.66C821.156 131.498 832.844 131.498 843.34 135.66C848.245 137.628 852.731 140.512 856.558 144.157C860.311 147.776 863.321 152.094 865.42 156.866C867.576 161.79 868.688 167.106 868.688 172.481C868.688 177.855 867.576 183.172 865.42 188.095C863.323 192.869 860.312 197.186 856.558 200.804C852.742 204.445 848.252 207.306 843.34 209.228C832.826 213.296 821.174 213.296 810.66 209.228C805.749 207.306 801.26 204.445 797.444 200.804C793.689 197.187 790.679 192.869 788.583 188.095C786.399 183.181 785.285 177.858 785.314 172.481ZM827.001 191.944C829.49 191.985 831.96 191.502 834.25 190.526C836.539 189.55 838.598 188.103 840.292 186.279C843.793 182.509 845.739 177.554 845.739 172.408C845.739 167.263 843.793 162.307 840.292 158.537C838.573 156.746 836.509 155.321 834.225 154.348C831.941 153.375 829.484 152.873 827.001 152.873C824.519 152.873 822.062 153.375 819.778 154.348C817.494 155.321 815.43 156.746 813.711 158.537C810.209 162.307 808.263 167.263 808.263 172.408C808.263 177.554 810.209 182.509 813.711 186.279C815.404 188.103 817.463 189.55 819.753 190.526C822.043 191.502 824.512 191.985 827.001 191.944Z" fill="#02C652"/>
          <path d="M879.726 133.99V210.826L903.257 210.826V162.023C905.163 159.05 907.785 156.603 910.882 154.906C914.013 153.166 917.541 152.265 921.122 152.291C923.125 152.288 925.121 152.507 927.076 152.944C928.868 153.335 930.618 153.894 932.305 154.615V134.135C931.258 133.427 930.068 132.956 928.82 132.755C927.041 132.473 925.246 132.304 923.446 132.247C919.53 132.193 915.654 133.037 912.115 134.717C908.701 136.384 905.681 138.761 903.257 141.688V133.99H879.726Z" fill="#02C652"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M1010.01 200.659C1005.61 204.466 1000.57 207.466 995.127 209.519C989.593 211.433 983.767 212.367 977.913 212.279C972.298 212.316 966.728 211.28 961.501 209.228C956.561 207.319 952.045 204.457 948.21 200.804C944.456 197.186 941.446 192.869 939.349 188.095C937.166 183.181 936.052 177.858 936.083 172.481C936.05 167.118 937.112 161.804 939.206 156.866C941.191 152.121 944.076 147.806 947.701 144.157C951.34 140.537 955.66 137.674 960.411 135.733C965.409 133.678 970.767 132.641 976.17 132.682C981.379 132.63 986.542 133.662 991.331 135.713C996.119 137.763 1000.43 140.787 1003.99 144.593C1007.53 148.446 1010.27 152.963 1012.05 157.884C1014.02 163.255 1015 168.938 1014.95 174.659V180.47H960.193C961.724 184.032 964.244 187.082 967.455 189.257C970.88 191.573 974.942 192.766 979.076 192.67C982.05 192.71 985.005 192.192 987.789 191.145C990.292 190.2 992.569 188.741 994.472 186.861L1010.01 200.659ZM975.734 151.855C972.13 151.769 968.601 152.895 965.712 155.051C962.805 157.329 960.715 160.489 959.756 164.057H991.858C990.722 160.557 988.573 157.474 985.684 155.197C982.848 152.976 979.336 151.796 975.734 151.855Z" fill="#02C652"/>
          <path d="M1088.88 210.826V133.99H1112.41V141.688C1114.84 138.761 1117.86 136.384 1121.27 134.717C1124.81 133.037 1128.69 132.193 1132.6 132.247C1134.4 132.304 1136.2 132.473 1137.98 132.755C1139.22 132.956 1140.41 133.427 1141.46 134.135V154.615C1139.77 153.894 1138.02 153.335 1136.23 152.944C1134.28 152.507 1132.28 152.288 1130.28 152.291C1126.7 152.265 1123.17 153.166 1120.04 154.906C1116.94 156.603 1114.32 159.05 1112.41 162.023V210.826L1088.88 210.826Z" fill="#02C652"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M1148.5 156.866C1146.32 161.781 1145.21 167.103 1145.24 172.481C1145.21 177.858 1146.32 183.181 1148.5 188.095C1150.6 192.869 1153.61 197.186 1157.37 200.804C1161.18 204.444 1165.67 207.306 1170.58 209.228C1181.1 213.296 1192.75 213.296 1203.26 209.228C1208.18 207.305 1212.67 204.444 1216.48 200.804C1220.23 197.185 1223.24 192.868 1225.34 188.095C1227.5 183.172 1228.61 177.855 1228.61 172.481C1228.61 167.106 1227.5 161.79 1225.34 156.866C1223.24 152.094 1220.23 147.777 1216.48 144.157C1212.65 140.512 1208.17 137.629 1203.26 135.66C1192.77 131.497 1181.08 131.497 1170.58 135.66C1165.68 137.628 1161.19 140.512 1157.37 144.157C1153.61 147.776 1150.6 152.093 1148.5 156.866ZM1194.17 190.526C1191.88 191.502 1189.41 191.986 1186.92 191.944C1184.43 191.986 1181.96 191.502 1179.68 190.526C1177.39 189.55 1175.33 188.103 1173.63 186.279C1170.13 182.509 1168.19 177.553 1168.19 172.408C1168.19 167.262 1170.13 162.307 1173.63 158.537C1175.35 156.746 1177.42 155.321 1179.7 154.348C1181.98 153.375 1184.44 152.873 1186.92 152.873C1189.41 152.873 1191.86 153.375 1194.15 154.348C1196.43 155.321 1198.49 156.746 1200.21 158.537C1203.71 162.307 1205.66 167.262 1205.66 172.408C1205.66 177.553 1203.71 182.509 1200.21 186.279C1198.52 188.103 1196.46 189.55 1194.17 190.526Z" fill="#02C652"/>
          <path d="M1239.65 133.99H1263.18V139.219C1266.05 137.055 1269.27 135.386 1272.69 134.28C1276.28 133.11 1280.03 132.522 1283.8 132.538C1292.81 132.538 1300.17 135.443 1305.88 141.253C1311.59 147.062 1314.45 154.47 1314.45 163.475V210.826H1290.92V166.671C1291.03 164.812 1290.74 162.952 1290.08 161.213C1289.41 159.473 1288.39 157.893 1287.07 156.576C1285.76 155.26 1284.18 154.236 1282.44 153.573C1280.7 152.91 1278.84 152.622 1276.98 152.727C1274.23 152.676 1271.5 153.22 1268.99 154.324C1266.72 155.345 1264.73 156.888 1263.18 158.828V210.826L1239.65 210.826V133.99Z" fill="#02C652"/>
          <path d="M1336.39 153.599V187.441C1336.38 195.479 1338.73 201.555 1343.43 205.67C1348.12 209.785 1355.07 211.843 1364.27 211.843C1367.04 211.801 1369.81 211.583 1372.55 211.19C1375.3 210.867 1378.03 210.308 1380.68 209.519V190.492C1378.93 191.033 1377.13 191.446 1375.31 191.726C1373.58 191.975 1371.83 192.096 1370.08 192.09C1366.3 192.09 1363.67 191.388 1362.16 189.983C1360.66 188.58 1359.91 186.184 1359.91 182.793V153.599H1381.41V133.99H1359.91V109.153L1336.39 114.236V133.99H1320.84V153.599H1336.39Z" fill="#02C652"/>
          <path d="M159.217 69.924C157.646 70.9005 156.105 72.4415 153.023 75.5234C149.942 78.6048 148.4 80.1463 147.424 81.7165C144.192 86.914 144.192 93.496 147.424 98.6935C148.4 100.264 149.941 101.804 153.021 104.885L153.023 104.886C156.105 107.968 157.646 109.509 159.217 110.486C164.414 113.718 170.996 113.718 176.193 110.486C177.764 109.509 179.305 107.969 182.387 104.887C185.469 101.805 187.009 100.264 187.986 98.6935C191.218 93.496 191.218 86.914 187.986 81.7165C187.009 80.1462 185.469 78.6053 182.387 75.5234C179.305 72.4415 177.764 70.9005 176.193 69.924C170.996 66.692 164.414 66.692 159.217 69.924Z" fill="#02C652"/>
          <path d="M179.493 166.341L215.353 130.48C216.839 128.995 218.603 127.816 220.544 127.012C222.485 126.208 224.566 125.794 226.667 125.794C228.768 125.794 230.848 126.208 232.79 127.012C234.731 127.816 236.495 128.995 237.98 130.48L256 148.5C255.891 148.608 168 236.5 168 236.5L80 148.5C80.2387 148.262 89.9816 138.519 98.2092 130.291C99.6941 128.806 101.457 127.628 103.397 126.824C105.338 126.021 107.417 125.607 109.517 125.607C111.617 125.607 113.697 126.021 115.637 126.825C117.577 127.629 119.34 128.807 120.825 130.293L156.874 166.342C158.359 167.827 160.123 169.005 162.063 169.809C164.004 170.613 166.083 171.026 168.184 171.026C170.284 171.026 172.364 170.612 174.304 169.808C176.245 169.004 178.008 167.826 179.493 166.341Z" fill="#02C652"/>
        </svg>
      </div>

      <div className='container'>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                        {column.render("Header")}
                    </th>
                  ))}
              </tr>
            ) )}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);        //preparing each row that we are rendering, and it takes the row as an argument, it can be used to perform any neccesary calculation on how to format the row 
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {


                  
                  return (
                    <td {...cell.getCellProps()}>
                        {cell.render("Cell")}
                    </td>
                    )}
                  )}
                </tr>
              )
            })}          
          </tbody>
        </table>  


      </div>
    </div>
  );
}

export default App;
