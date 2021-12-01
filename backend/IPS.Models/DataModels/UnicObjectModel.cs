using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IPS.Models.DataModels
{
    public abstract class UnicObjectModel
    {
        [Key]
        public virtual string GUID {get;set;}
    }
    public class GuidLink: UnicObjectModel
    {
        public virtual DateTime CreationDateTime {get;set;}
    }
}