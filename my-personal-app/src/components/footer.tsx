
const Footer = () => {
  return (
    <div className="bg-gray-800 text-white text-center py-4">
      <p className="text-lg font-bold">MY CONSULTING ARCHITECTS & ENGINEERS PLC</p>
      <p className="text-lg font-bold">ኤም ዋይ አርክቴክቶች እና መሃንዲሶች አማካሪ ጏ. የተ . የግ . ማ</p>
      
      <p>📞 (608) 783-3101</p>
      <p>📞 (251) 111 229 000 | (251) 220 12 8534</p>
      
      <p>✉️ myconsulting2008@gmail.com</p>
      <p>🌐 www.mywebsite.com</p>

      <div className="mt-2">
        <p className="text-sm">Follow us on:</p>
        <div className="flex justify-center space-x-4 mt-1">
          <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
          <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
          <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;