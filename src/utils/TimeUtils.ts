export default class TimeUtils {
    static formatSeconds(secs: number): string {
        let months = Math.floor(secs / 2592000);
        let days = Math.floor(secs / 86400);
        let hours = Math.floor(secs / 3600);
        let minutes = Math.floor(secs / 60);
        let seconds = Math.floor(secs % 60);

        if (months > 0) return (months > 1) ? (months + " months ") : (months + " month ");
        if (days > 0) return (days > 1) ? (days + " days ") : (days + " day ");
        if (hours > 0) return (hours > 1) ? (hours + " hours ") : (hours + " hour ");
        if (minutes > 0) return (minutes > 1) ? (minutes + " minutes ") : (minutes + " minute ");
        if (seconds >= 30) return (seconds > 1) ? (seconds + " seconds") : (seconds + " second");

        return "just now";
    }

    static formatAgo(secs: number): string {
        let formatted = TimeUtils.formatSeconds(Date.now() / 1000 - secs);

        if (formatted !== "just now")
            return formatted + " ago";

        return formatted;
    }

    static formatDate(secs: number): string {
        return new Date(secs * 1000).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    }

    static FormatDuration(duration: number): string {
        const hrs = ~~(duration / 3600);
        const mins = ~~((duration % 3600) / 60);
        const secs = ~~duration % 60;
        
        let ret = "";
      
        if (hrs > 0)
          ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
      
        ret += "" + mins + ":" + (secs < 10 ? "0" : "");
        ret += "" + secs;
      
        return ret;
    }
}