﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MasterDetails.Controllers
{
    public class TableExportController : Controller
    {
        // GET: TableExportController
        public ActionResult Index()
        {
            return View();
        }

        // GET: TableExportController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: TableExportController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: TableExportController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: TableExportController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: TableExportController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: TableExportController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: TableExportController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
