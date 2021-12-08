using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IPS.Models.DataModels
{
    public class Presentation
    {
        public virtual long Id { get; set; }
        public virtual string Name { get; set; }
        public virtual string ImageLink { get; set; }
        public virtual ICollection<Slide> Slides { get; set; }

    }
    public class Slide
    {
        public virtual long Id { get; set; }
        public long PresentationId { get; set; }
        public virtual ICollection<PresentationObject> Objects { get; set; }
    }
    public enum PresentationObjectType
    {
        TextBox = 0,
        Picture = 1
        //add smthng if u want 
    }
    public abstract class PresentationObject
    {
        public long Id { get; set; }
        public virtual decimal PositionX { get; set; }
        public virtual decimal PositionY { get; set; }
        public virtual decimal Height { get; set; }
        public virtual decimal Weight { get; set; }
        public virtual PresentationObjectType Type { get; set; }
    }
    public class TextBoxObject : PresentationObject
    {
        public virtual string Text { get; set; }
        public virtual string Font { get; set; }
        public virtual int TextHeight { get; set; }
    }
    public class PictureObject : PresentationObject
    {
        //base64 data
        public virtual string Content { get; set; }
        public virtual int Capacity { get; set; }
    }
}
