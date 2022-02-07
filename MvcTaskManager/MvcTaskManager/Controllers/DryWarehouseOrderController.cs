using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MvcTaskManager.Identity;
using MvcTaskManager.Models;
using MvcTaskManager.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MvcTaskManager.Controllers
{
  public class DryWarehouseOrderController : Controller
  {
   
    private ApplicationDbContext db;

    public DryWarehouseOrderController(ApplicationDbContext db)
    {
      this.db = db;
    }

    [HttpGet]
    [Route("api/dry_wh_orders_checklist_distinct")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public List<DryWhOrder> GetDistinctPreparedOrders()
    {
      string Activated = "1";
      string DeActivated = "0";
      List<DryWhOrder> StoreOrderCheckList = db.dry_wh_orders.GroupBy(p => new {p.is_approved_prepa_date, p.fox}).Select(g => g.First()).Where(temp => temp.is_active.Contains(Activated)
      && temp.is_for_validation.Contains(DeActivated) && temp.is_approved != null && temp.is_prepared != null && temp.is_wh_approved == null || temp.force_prepared_status != null).ToList();
      return StoreOrderCheckList;


    }


    [HttpGet]
    [Route("api/dry_wh_orders_checklist_distinct_partial_cancel")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public List<DryWhOrder> GetDistinctPreparedOrderPartialCancel()
    {
      string Activated = "1";
      string DeActivated = "0";
      List<DryWhOrder> StoreOrderCheckList = db.dry_wh_orders.GroupBy(p => new { p.is_approved_prepa_date, p.fox }).Select(g => g.First()).Where(temp => temp.is_active.Contains(Activated)
        && temp.is_for_validation.Contains(DeActivated) && temp.is_approved != null && temp.is_prepared != null && temp.is_wh_approved == null && temp.is_wh_checker_cancel != null || temp.force_prepared_status != null).ToList();
      return StoreOrderCheckList;


    }



    [HttpGet]
    [Route("api/dry_wh_orders_distinct_store_dispatching")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public List<DryWhOrder> GetDistinctDispatchingOrders()
    {
      string Activated = "1";
      string DeActivated = "0";
      List<DryWhOrder> StoreOrderCheckList = db.dry_wh_orders.GroupBy(p => new { p.is_approved_prepa_date, p.fox }).Select(g => g.First()).Where(temp => temp.is_active.Contains(Activated)
        && temp.is_for_validation.Contains(DeActivated) && temp.is_approved != null && temp.is_prepared != null && temp.is_wh_approved != null || temp.force_prepared_status != null).ToList();
      return StoreOrderCheckList;

    }




    [HttpGet]
    [Route("api/store_orders")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public List<DryWhOrder> GetStoreOrders()
    {
      string Activated = "1";
      string DeActivated = "0";
      List<DryWhOrder> StoreOrderCheckList = db.dry_wh_orders.GroupBy(p => new { p.is_approved_prepa_date }).Select(g => g.First()).Where(temp => temp.is_active.Contains(Activated)
        && temp.is_for_validation.Contains(DeActivated) && temp.is_approved != null && temp.is_prepared == null || temp.force_prepared_status != null).ToList();
      return StoreOrderCheckList;
    }







    [HttpGet]
    [Route("api/dry_wh_orders_checklist_distinct_cancelled")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public List<DryWhOrder> GetDistinctPreparedCancelledOrders()
    {
      string Activated = "1";
      string DeActivated = "0";
      List<DryWhOrder> StoreOrderCheckList = db.dry_wh_orders.GroupBy(p => new { p.is_approved_prepa_date }).Select(g => g.First()).Where(temp => temp.is_active.Contains(Activated)
        && temp.is_for_validation.Contains(DeActivated) && temp.is_approved != null && temp.is_prepared != null && temp.is_wh_approved == null && temp.is_wh_checker_cancel != null || temp.force_prepared_status != null).ToList();
      return StoreOrderCheckList;


 
    }


    [HttpGet]
    [Route("api/getStoreOrderMaterialCancelled")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public List<DryWhOrder> GetStoreOrderMaterialPerItems()
    {
      string Activated = "1";
   
      List<DryWhOrder> StoreOrderCheckList = db.dry_wh_orders.Where(temp => temp.is_active.Contains(Activated) && temp.is_wh_checker_cancel.Contains(Activated)).ToList();
      return StoreOrderCheckList;



    }







    [HttpGet]
    [Route("api/store_orders/search/{searchby}/{searchtext}/{searchindex}")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public IActionResult Search(string searchBy, string searchText, string searchIndex)
    {

      //string data_is_pending = "1";
      string is_activated = "1";
      List<DryWhOrder> projects = null;

      string ApprovedPreparationDate = searchText;
      string FoxStoreCode = searchIndex;
      if (searchBy == "store_name")

        projects = db.dry_wh_orders.Where(temp => temp.is_active.Contains(is_activated) && temp.is_approved_prepa_date.Contains(ApprovedPreparationDate) && temp.fox.Contains(FoxStoreCode) && temp.is_wh_checker_cancel == null).ToList();

     
      List <DryWhOrderViewModel> WarehouseStoreOrderContructor = new List<DryWhOrderViewModel>();
      foreach (var project in projects)
      {
        WarehouseStoreOrderContructor.Add(new DryWhOrderViewModel()
        {

          Primary_id = project.primary_id,
          Is_approved_prepa_date = project.is_approved_prepa_date,
          Store_name = project.store_name,
          Route = project.route,
          Area = project.area,
          Category = project.category,
          Is_active = project.is_active,
          Is_for_validation = project.is_for_validation,
          Is_approved = project.is_approved,
          Is_prepared = project.is_prepared,
          Force_prepared_status = project.force_prepared_status,
          Fox = project.fox,
          Item_code = project.item_code,
          Description = project.description,
          Uom = project.uom,
          Total_state_repack = project.total_state_repack,
          Qty = project.qty,
          Prepared_allocated_qty = project.prepared_allocated_qty,
          Total_state_repack_cancelled_qty = project.total_state_repack_cancelled_qty
        



        });
      }

      return Ok(WarehouseStoreOrderContructor);
    }







    [HttpGet]
    [Route("api/store_orders_partial_cancel/search/{searchby}/{searchtext}/{searchindex}")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public IActionResult SearchPartialCancel(string searchBy, string searchText, string searchIndex)
    {

      //string data_is_pending = "1";
      string is_activated = "1";
      List<DryWhOrder> projects = null;

      string ApprovedPreparationDate = searchText;
      string FoxStoreCode = searchIndex;
      if (searchBy == "store_name")

        projects = db.dry_wh_orders.Where(temp => temp.is_active.Contains(is_activated) && temp.is_approved_prepa_date.Contains(ApprovedPreparationDate) && temp.fox.Contains(FoxStoreCode) && temp.is_wh_checker_cancel != null).ToList();


      List<DryWhOrderViewModel> WarehouseStoreOrderContructor = new List<DryWhOrderViewModel>();
      foreach (var project in projects)
      {
        WarehouseStoreOrderContructor.Add(new DryWhOrderViewModel()
        {

          Primary_id = project.primary_id,
          Is_approved_prepa_date = project.is_approved_prepa_date,
          Store_name = project.store_name,
          Route = project.route,
          Area = project.area,
          Category = project.category,
          Is_active = project.is_active,
          Is_for_validation = project.is_for_validation,
          Is_approved = project.is_approved,
          Is_prepared = project.is_prepared,
          Force_prepared_status = project.force_prepared_status,
          Fox = project.fox,
          Item_code = project.item_code,
          Description = project.description,
          Uom = project.uom,
          Total_state_repack = project.total_state_repack,
          Qty = project.qty,
          Prepared_allocated_qty = project.prepared_allocated_qty,
          Is_wh_checker_cancel_reason = project.is_wh_checker_cancel_reason,
          Is_wh_checker_cancel_by = project.is_wh_checker_cancel_by,
          Is_wh_checker_cancel_date = project.is_wh_checker_cancel_date,
          Total_state_repack_cancelled_qty = project.total_state_repack_cancelled_qty






        });
      }

      return Ok(WarehouseStoreOrderContructor);
    }




    [HttpPut]
    [Route("api/store_orders")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public IActionResult Put([FromBody] DryWhOrder project)
    {
      DryWhOrder existingProject = db.dry_wh_orders.Where(temp => temp.is_approved_prepa_date == project.is_approved_prepa_date && temp.store_name == project.store_name && temp.route == project.route && temp.area == project.area && temp.category == project.category ).FirstOrDefault();
      if (existingProject != null)
      {
        existingProject.is_wh_approved = project.is_wh_approved;
        existingProject.is_wh_approved_by = project.is_wh_approved_by;
        existingProject.is_wh_approved_date = project.is_wh_approved_date;
        existingProject.wh_checker_move_order_no = project.wh_checker_move_order_no;
       
      

        db.SaveChanges();

        DryWhOrder existingProject2 = db.dry_wh_orders.Where(temp => temp.is_approved_prepa_date == project.is_approved_prepa_date && temp.store_name == project.store_name && temp.route == project.route && temp.area == project.area && temp.category == project.category).FirstOrDefault();
        DryWhOrderViewModel projectViewModel = new DryWhOrderViewModel()
        {
          Is_wh_approved= existingProject2.is_wh_approved,
          Is_wh_approved_by = existingProject2.is_wh_approved_by,
          Is_wh_approved_date = existingProject2.is_wh_approved_date,
          Wh_checker_move_order_no = existingProject2.wh_checker_move_order_no
         


        };
        return Ok(projectViewModel);
      }
      else
      {
        return null;
      }
    }



    [HttpPut]
    [Route("api/store_orders/cancelitems")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public IActionResult PutCancelPreparedItem([FromBody] DryWhOrder project)
    {
      DryWhOrder existingProject = db.dry_wh_orders.Where(temp => temp.is_approved_prepa_date == project.is_approved_prepa_date && temp.primary_id == project.primary_id).FirstOrDefault();
      if (existingProject != null)
      {
        existingProject.is_wh_checker_cancel = project.is_wh_checker_cancel;
        existingProject.is_wh_checker_cancel_by = project.is_wh_checker_cancel_by;
        existingProject.is_wh_checker_cancel_date = project.is_wh_checker_cancel_date;
        existingProject.is_wh_checker_cancel_reason = project.is_wh_checker_cancel_reason;
        existingProject.total_state_repack_cancelled_qty = project.total_state_repack_cancelled_qty;


        db.SaveChanges();

        DryWhOrder existingProject2 = db.dry_wh_orders.Where(temp => temp.is_approved_prepa_date == project.is_approved_prepa_date && temp.primary_id == project.primary_id).FirstOrDefault();
        DryWhOrderViewModel projectViewModel = new DryWhOrderViewModel()
        {
          Is_wh_checker_cancel = existingProject2.is_wh_checker_cancel,
          Is_wh_checker_cancel_by = existingProject2.is_wh_checker_cancel_by,
          Is_wh_checker_cancel_date = existingProject2.is_wh_checker_cancel_date,
          Is_wh_checker_cancel_reason = existingProject2.is_wh_checker_cancel_reason,
          Total_state_repack_cancelled_qty = existingProject2.total_state_repack_cancelled_qty



        };
        return Ok(projectViewModel);
      }
      else
      {
        return null;
      }
    }


    //[HttpPut]
    //[Route("api/store_orders/cancelitems/readline")]
    //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    //public IActionResult PutCancelPreparedItemReadLine([FromBody] DryWhOrder project)
    //{

    //  List<DryWhOrder> existingProject = db.dry_wh_orders.Where(temp => temp.is_approved_prepa_date == project.is_approved_prepa_date && temp.category == project.category).ToList();
    //  if (existingProject != null)
    //  {
    //    project.dispossal_status = project.dispossal_status;



    //    db.SaveChanges();

    //    List<DryWhOrder> existingProject2 = db.dry_wh_orders.Where(temp => temp.is_approved_prepa_date == project.is_approved_prepa_date && temp.category == project.category).ToList();
    //    DryWhOrderViewModel projectViewModel = new DryWhOrderViewModel()
    //    {
    //      Dispossal_status = project.dispossal_status
 



    //    };
    //    return Ok(projectViewModel);
    //  }
    //  else
    //  {
    //    return null;
    //  }
    //}

    [HttpPut]
    [Route("api/store_orders/cancelitems/readline")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public IActionResult PutCancelPreparedItemReadLine([FromBody] Store_Preparation_LogsModel project)
    {

      List<Store_Preparation_LogsModel> existingProject = db.Store_Preparation_Logs.Where(temp => temp.order_source_key == project.order_source_key ).ToList();
      if (existingProject != null)
      {
        project.is_active = project.is_active;



        db.SaveChanges();

        List<Store_Preparation_LogsModel> existingProject2 = db.Store_Preparation_Logs.Where(temp => temp.order_source_key == project.order_source_key).ToList();
        Store_Preparation_Logs_View_Model projectViewModel = new Store_Preparation_Logs_View_Model()
        {
          Is_active = project.is_active




        };
        return Ok(projectViewModel);
      }
      else
      {
        return null;
      }
    }



  }
}
