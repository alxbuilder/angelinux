allfiles = %x[find content -name "*.html" -print]
googlefile = %x[find content -name "google*.html" -print]
exclude = %x[find content -name "protest.html" -print]
mapfiles = allfiles.gsub(googlefile,'').gsub(/content\//,'/')

# If there are more files to exclude, this will need an 'each'
mapfiles = allfiles.gsub(exclude,'')
# puts mapfiles
require 'xml-sitemap'
sm = XmlSitemap::Map.new('angelinux.hopto.org')


mapfiles.lines.each do |mapfile|
#	puts "<a href=\""+mapfile+">"+mapfile+"</a>\""
	sm.add mapfile
end

sm.items.to_s.display

# 2.1.0 :007 > map = XmlSitemap::Map.new('angelinux.hopto.org') do |m|
# 2.1.0 :008 >     m.add '/about/findme.html'
# 2.1.0 :009?>   end
