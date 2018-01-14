using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PassengerClient.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Search()
        {
            ViewBag.Message = "You can search passengers here.";

            return View();
        }

        public ActionResult Add()
        {
            ViewBag.Message = "You can add passengers here.";

            return View();
        }
    }
}